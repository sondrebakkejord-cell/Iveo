#!/usr/bin/env bash
# Iveo Site Auditor — sjekk om en nettside er gammel/dårlig
# Bruk: ./sjekk-nettside.sh <url>
# Eksempel: ./sjekk-nettside.sh nuayfrisor.no

URL="${1:-}"
if [[ -z "$URL" ]]; then
  echo "Bruk: $0 <url>"
  exit 1
fi

# Legg til https:// om ikke gitt
[[ "$URL" != http* ]] && URL="https://$URL"

echo "🔍 Auditerer: $URL"
echo ""

# Hent siden med curl
TMP=$(mktemp)
HEADERS=$(mktemp)
START=$(date +%s%N)
HTTP_CODE=$(curl -sLI -m 10 -o "$HEADERS" -w "%{http_code}" "$URL" 2>/dev/null)
curl -sL -m 15 -A "Mozilla/5.0 (compatible; IveoAudit/1.0)" "$URL" -o "$TMP" 2>/dev/null
END=$(date +%s%N)
LOAD_MS=$(( (END - START) / 1000000 ))

SCORE=10
ISSUES=()
STRENGTHS=()

# 1. HTTP-status
if [[ "$HTTP_CODE" != "200" ]]; then
  echo "❌ FEIL: HTTP $HTTP_CODE — siden svarer ikke skikkelig"
  echo "   Dette er en perfekt prospect."
  rm -f "$TMP" "$HEADERS"
  exit 0
fi

# 2. HTTPS
if [[ "$URL" == https* ]]; then
  STRENGTHS+=("✓ HTTPS")
else
  ISSUES+=("✗ Ingen HTTPS — ikke trygg")
  SCORE=$((SCORE - 2))
fi

# 3. Lastetid
if [[ $LOAD_MS -lt 1500 ]]; then
  STRENGTHS+=("✓ Rask (${LOAD_MS}ms)")
elif [[ $LOAD_MS -lt 4000 ]]; then
  ISSUES+=("⚠ Treg (${LOAD_MS}ms)")
  SCORE=$((SCORE - 1))
else
  ISSUES+=("✗ Veldig treg (${LOAD_MS}ms)")
  SCORE=$((SCORE - 2))
fi

# 4. Mobil-vennlig (viewport meta)
if grep -q 'viewport' "$TMP" 2>/dev/null; then
  STRENGTHS+=("✓ Mobiloptimalisert")
else
  ISSUES+=("✗ Ikke mobiloptimalisert (mangler viewport)")
  SCORE=$((SCORE - 3))
fi

# 5. Tech-stack detection
if grep -qi "wp-content\|wp-includes\|wordpress" "$TMP" 2>/dev/null; then
  TECH="WordPress"
  if grep -qiE "twentyfifteen|twentysixteen|twentyseventeen|twentyeighteen|twentynineteen|twentytwenty[^-]" "$TMP" 2>/dev/null; then
    ISSUES+=("✗ Gammel WordPress-mal (2015-2020)")
    SCORE=$((SCORE - 3))
  fi
elif grep -qi "wix.com\|wixstatic\|x-wix-published-version" "$TMP" "$HEADERS" 2>/dev/null; then
  TECH="Wix"
  ISSUES+=("⚠ Wix-mal — generisk look")
  SCORE=$((SCORE - 2))
elif grep -qi "squarespace\|sqs" "$TMP" 2>/dev/null; then
  TECH="Squarespace"
elif grep -qi "shopify" "$TMP" 2>/dev/null; then
  TECH="Shopify"
elif grep -qi "joomla\|drupal" "$TMP" 2>/dev/null; then
  TECH="Joomla/Drupal (gammelt)"
  ISSUES+=("✗ Joomla eller Drupal — utdatert tech")
  SCORE=$((SCORE - 3))
elif grep -qi "next-head\|_next\|nextjs" "$TMP" 2>/dev/null; then
  TECH="Next.js (moderne)"
  STRENGTHS+=("✓ Moderne stack")
elif grep -qi "_nuxt\|nuxt" "$TMP" 2>/dev/null; then
  TECH="Nuxt (moderne)"
  STRENGTHS+=("✓ Moderne stack")
else
  TECH="Ukjent / Custom"
fi

# 6. Meta-description
if grep -qiE '<meta\s+name=["'"'"']description' "$TMP" 2>/dev/null; then
  STRENGTHS+=("✓ Meta-beskrivelse")
else
  ISSUES+=("⚠ Mangler meta-beskrivelse (SEO)")
  SCORE=$((SCORE - 1))
fi

# 7. Open Graph (social sharing)
if grep -qi 'og:title\|og:image' "$TMP" 2>/dev/null; then
  STRENGTHS+=("✓ Open Graph")
else
  ISSUES+=("⚠ Mangler Open Graph (deling på sosiale medier)")
  SCORE=$((SCORE - 1))
fi

# 8. Filstørrelse
SIZE=$(wc -c < "$TMP" 2>/dev/null || echo 0)
SIZE_KB=$((SIZE / 1024))
if [[ $SIZE_KB -gt 500 ]]; then
  ISSUES+=("⚠ Tung side (${SIZE_KB}KB)")
  SCORE=$((SCORE - 1))
fi

# 9. Sjekk for tabeller for layout (mega-gammelt)
if grep -qE '<table[^>]*>.*<table' "$TMP" 2>/dev/null; then
  ISSUES+=("✗ Bruker tabeller for layout (90-talls-design)")
  SCORE=$((SCORE - 3))
fi

# 10. Flash / Java
if grep -qiE '\.swf|<applet|<embed.*flash' "$TMP" 2>/dev/null; then
  ISSUES+=("✗ Bruker Flash (utdatert siden 2020)")
  SCORE=$((SCORE - 5))
fi

# Begrens score til 0-10
[[ $SCORE -lt 0 ]] && SCORE=0
[[ $SCORE -gt 10 ]] && SCORE=10

# Output
echo "📊 Score: $SCORE/10"
echo "⚙️  Tech: $TECH"
echo "⏱️  Lastetid: ${LOAD_MS}ms"
echo "📦 Størrelse: ${SIZE_KB}KB"
echo ""

if [[ ${#STRENGTHS[@]} -gt 0 ]]; then
  echo "💪 Styrker:"
  for s in "${STRENGTHS[@]}"; do echo "  $s"; done
  echo ""
fi

if [[ ${#ISSUES[@]} -gt 0 ]]; then
  echo "🔧 Problemer:"
  for i in "${ISSUES[@]}"; do echo "  $i"; done
  echo ""
fi

# Vurder potensial
echo "🎯 Vurdering for Iveo-tilbud:"
if [[ $SCORE -ge 8 ]]; then
  echo "  ❌ Lite potensial — siden er allerede god"
elif [[ $SCORE -ge 5 ]]; then
  echo "  ⚠ Middels potensial — kan forbedres, men ikke akutt"
else
  echo "  ⭐ HØYT POTENSIAL — perfekt kandidat for Iveo-tilbud!"
  echo "  💬 Vinkling: 'Jeg så på siden deres og lagde et forslag til hvordan den kunne sett ut...'"
fi

rm -f "$TMP" "$HEADERS"
