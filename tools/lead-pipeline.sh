#!/usr/bin/env bash
# Iveo Lead Pipeline — finn leads OG auditer nettsidene deres automatisk
#
# Bruk: ./lead-pipeline.sh <bransjekode> <poststed> [antall]
# Eksempel: ./lead-pipeline.sh 96.210 BODØ 20

BRANSJE="${1:-96.210}"
STED="${2:-BODØ}"
SIZE="${3:-20}"

STED_ENC=$(printf "%s" "$STED" | python3 -c "import sys, urllib.parse; print(urllib.parse.quote(sys.stdin.read()))")

# Hent leads fra Brønnøysund
JSON=$(curl -s "https://data.brreg.no/enhetsregisteret/api/enheter?naeringskode=$BRANSJE&forretningsadresse.poststed=$STED_ENC&size=$SIZE")
TOTAL=$(echo "$JSON" | python3 -c "import json,sys; print(json.load(sys.stdin).get('page',{}).get('totalElements',0))")

echo "🎯 IVEO LEAD PIPELINE"
echo "Bransje: $BRANSJE | Sted: $STED | Auditerer $SIZE av $TOTAL bedrifter"
echo "════════════════════════════════════════════════════════"
echo ""

# Hent bedriftsliste som JSON
echo "$JSON" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for e in data.get('_embedded', {}).get('enheter', []):
    print(json.dumps({
        'navn': e.get('navn', ''),
        'orgnr': e.get('organisasjonsnummer', ''),
        'addr': ', '.join(e.get('forretningsadresse', {}).get('adresse', [])),
        'poststed': e.get('forretningsadresse', {}).get('poststed', ''),
        'hjemmeside': e.get('hjemmeside', '')
    }))
" | while read -r line; do
    NAVN=$(echo "$line" | python3 -c "import json,sys; print(json.load(sys.stdin)['navn'])")
    ORG=$(echo "$line" | python3 -c "import json,sys; print(json.load(sys.stdin)['orgnr'])")
    ADDR=$(echo "$line" | python3 -c "import json,sys; print(json.load(sys.stdin)['addr'])")
    POSTSTED=$(echo "$line" | python3 -c "import json,sys; print(json.load(sys.stdin)['poststed'])")
    HJEMMESIDE=$(echo "$line" | python3 -c "import json,sys; print(json.load(sys.stdin)['hjemmeside'])")

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🏢 $NAVN"
    echo "   📍 $ADDR, $POSTSTED"
    echo "   📋 Org-nr: $ORG"

    if [[ -z "$HJEMMESIDE" ]]; then
        echo "   ⭐ INGEN REGISTRERT NETTSIDE"
        echo ""
        echo "   🎯 LEAD-VURDERING: PERFEKT PROSPECT"
        echo "   💬 Vinkling: 'Jeg så at dere ikke har nettside — vi har laget"
        echo "      et forslag til hvordan den kunne se ut...'"
    else
        # Sikre at URL har https
        URL="$HJEMMESIDE"
        [[ "$URL" != http* ]] && URL="https://$URL"

        # Kjør rask audit
        TMP=$(mktemp)
        HTTP_CODE=$(curl -sLI -m 5 -o /dev/null -w '%{http_code}' "$URL" 2>/dev/null || echo 000)
        START=$(date +%s%N)
        curl -sL -m 8 -A 'Mozilla/5.0' "$URL" -o "$TMP" 2>/dev/null
        END=$(date +%s%N)
        LOAD_MS=$(( (END - START) / 1000000 ))

        SCORE=10
        if [[ "$HTTP_CODE" != "200" ]]; then
            echo "   🌐 $URL (HTTP $HTTP_CODE — svarer ikke!)"
            echo ""
            echo "   🎯 LEAD-VURDERING: PERFEKT — siden er ødelagt"
            rm -f "$TMP"
            continue
        fi

        echo "   🌐 $URL"

        # Tech detection
        TECH='?'
        if grep -qi 'wp-content\|wp-includes' "$TMP" 2>/dev/null; then
            TECH='WordPress'
            SCORE=$((SCORE - 1))
            if grep -qiE 'twentyfifteen|twentysixteen|twentyseventeen|twentynineteen|twentytwenty[^-]' "$TMP" 2>/dev/null; then
                TECH='Gammel WordPress'
                SCORE=$((SCORE - 3))
            fi
        elif grep -qi 'wix.com\|wixstatic' "$TMP" 2>/dev/null; then
            TECH='Wix'
            SCORE=$((SCORE - 2))
        elif grep -qi 'squarespace' "$TMP" 2>/dev/null; then
            TECH='Squarespace'
        elif grep -qi '_next\|nextjs' "$TMP" 2>/dev/null; then
            TECH='Next.js (moderne)'
        fi

        # Mobiltest
        MOBILE='✓'
        if ! grep -q 'viewport' "$TMP" 2>/dev/null; then
            MOBILE='✗'
            SCORE=$((SCORE - 3))
        fi

        # HTTPS-test
        HTTPS_OK='✓'
        if [[ \"$URL\" != https* ]]; then
            HTTPS_OK='✗'
            SCORE=$((SCORE - 2))
        fi

        # Lastetid
        if [[ $LOAD_MS -gt 4000 ]]; then
            SCORE=$((SCORE - 2))
        elif [[ $LOAD_MS -gt 2000 ]]; then
            SCORE=$((SCORE - 1))
        fi

        [[ $SCORE -lt 0 ]] && SCORE=0

        echo \"   ⚙️  $TECH | 📱 $MOBILE Mobil | 🔒 $HTTPS_OK HTTPS | ⏱️  ${LOAD_MS}ms\"
        echo \"   📊 Kvalitet-score: $SCORE/10\"
        echo \"\"

        if [[ $SCORE -le 4 ]]; then
            echo \"   🎯 LEAD-VURDERING: STERK PROSPECT\"
            echo \"   💬 Vinkling: 'Vi lagde et forslag til en moderne versjon av siden deres...'\"
        elif [[ $SCORE -le 7 ]]; then
            echo \"   🎯 LEAD-VURDERING: MULIG PROSPECT\"
            echo \"   💬 Vinkling: 'Vi kunne gjort siden raskere og mer moderne...'\"
        else
            echo \"   🎯 LEAD-VURDERING: Lavt potensial — siden er allerede grei\"
        fi
        rm -f \"$TMP\"
    fi
    echo \"\"
done

echo \"════════════════════════════════════════════════════════\"
echo \"✅ Ferdig. Lagre resultatene og gå gjennom prospects manuelt.\"
