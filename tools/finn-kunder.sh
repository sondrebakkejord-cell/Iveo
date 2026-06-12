#!/usr/bin/env bash
# Iveo Lead Finder — finn bedrifter i Norge uten nettside
# Data fra Brønnøysundregistrene (gratis, offentlig)
#
# Bruk:
#   ./finn-kunder.sh <bransjekode> <poststed> [antall]
#
# Eksempler:
#   ./finn-kunder.sh 96.210 BODØ         # Frisører i Bodø
#   ./finn-kunder.sh 56.301 OSLO 50      # Restauranter i Oslo
#   ./finn-kunder.sh 86.230 TRONDHEIM    # Tannleger i Trondheim
#
# Vanlige bransjekoder (NACE):
#   56.301  Restaurantvirksomhet
#   56.302  Drift av kaféer og kaffebarer
#   56.101  Drift av barer og puber
#   96.210  Frisering og barbering
#   96.220  Skjønnhetspleie
#   86.230  Tannhelsetjenester
#   86.211  Allmennlegetjenester
#   43.221  Rørleggerarbeid
#   43.290  Annen bygginstallasjon
#   43.999  Annen spesialisert bygge- og anleggsvirksomhet
#   95.110  Reparasjon av datamaskiner
#   75.000  Veterinærtjenester
#   47.711  Butikkhandel med klær
#   47.910  Postordrehandel
#   85.510  Undervisning innen idrett og rekreasjon
#   88.910  Barnehager
#   55.300  Drift av campingplasser
#   93.130  Treningssenter
#   71.111  Arkitekter
#   71.121  Rådgivende ingeniørvirksomhet

BRANSJE="${1:-96.210}"
STED="${2:-BODØ}"
SIZE="${3:-30}"

STED_ENC=$(printf "%s" "$STED" | python3 -c "import sys, urllib.parse; print(urllib.parse.quote(sys.stdin.read()))")

echo "🔍 Søker: bransjekode $BRANSJE i $STED"
echo ""

curl -s "https://data.brreg.no/enhetsregisteret/api/enheter?naeringskode=$BRANSJE&forretningsadresse.poststed=$STED_ENC&size=$SIZE" | \
python3 -c "
import json, sys

data = json.load(sys.stdin)
total = data.get('page', {}).get('totalElements', 0)
shown = len(data.get('_embedded', {}).get('enheter', []))

print(f'📊 Totalt {total} bedrifter — viser {shown}')
print()

leads_uten_nettside = 0
for i, e in enumerate(data.get('_embedded', {}).get('enheter', []), 1):
    adr = e.get('forretningsadresse', {})
    addr_str = ', '.join(adr.get('adresse', [])) if adr.get('adresse') else '(ingen adresse)'
    poststed = adr.get('poststed', '')
    postnr = adr.get('postnummer', '')

    print(f'{i:2}. {e.get(\"navn\")}')
    print(f'    📍 {addr_str}, {postnr} {poststed}')
    print(f'    📋 Org-nr: {e.get(\"organisasjonsnummer\")}')

    if e.get('hjemmeside'):
        print(f'    🌐 {e.get(\"hjemmeside\")}')
    else:
        leads_uten_nettside += 1
        print(f'    ⭐ INGEN NETTSIDE — POTENSIELL KUNDE!')
    print()

print(f'✨ {leads_uten_nettside} av {shown} har ingen registrert nettside')
print()
print('💡 Neste steg:')
print('   1. Google bedriftene for å sjekke om de har Facebook/Instagram')
print('   2. Lag mockup til 5-10 av de mest interessante')
print('   3. Send personlig melding via Facebook eller besøk butikken')
"
