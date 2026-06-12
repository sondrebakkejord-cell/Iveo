#!/usr/bin/env bash
# Eksporter leads til CSV for Excel / Google Sheets
# Bruk: ./leads-til-csv.sh <bransjekode> <poststed> [antall] > leads.csv

BRANSJE="${1:-96.210}"
STED="${2:-BODØ}"
SIZE="${3:-100}"

STED_ENC=$(printf "%s" "$STED" | python3 -c "import sys, urllib.parse; print(urllib.parse.quote(sys.stdin.read()))")

curl -s "https://data.brreg.no/enhetsregisteret/api/enheter?naeringskode=$BRANSJE&forretningsadresse.poststed=$STED_ENC&size=$SIZE" | \
python3 -c "
import json, sys, csv

data = json.load(sys.stdin)
writer = csv.writer(sys.stdout)
writer.writerow(['Navn', 'Org-nr', 'Adresse', 'Postnummer', 'Poststed', 'Nettside', 'Bransje', 'Stiftet', 'Status'])

for e in data.get('_embedded', {}).get('enheter', []):
    adr = e.get('forretningsadresse', {})
    addr_str = ', '.join(adr.get('adresse', [])) if adr.get('adresse') else ''
    has_site = '✓' if e.get('hjemmeside') else '✗ INGEN — LEAD!'
    writer.writerow([
        e.get('navn', ''),
        e.get('organisasjonsnummer', ''),
        addr_str,
        adr.get('postnummer', ''),
        adr.get('poststed', ''),
        e.get('hjemmeside', ''),
        e.get('naeringskode1', {}).get('beskrivelse', ''),
        e.get('stiftelsesdato', ''),
        has_site,
    ])
"
