angular i18n/@localize update voor nieuwe translatie {
  ng extract-i18n --format=json --output-path src/locale --out-file messages.json
}

om het optebouwen/live te zetteb {
  ng build --localize
}

f you want the real /en and /nl switcher to work, you need to:

ng build (this emits both locales), then

serve the built folder:
npx http-server dist/shopping-basket/browser -p 4200
and open /en/ or /nl/.

If you’re just coding and testing quickly in dev, run one locale at a time:

ng serve -c en (English dev)

ng serve -c nl (Dutch dev)
Note: your navbar links to /en///nl/ won’t work during dev because the dev server only serves one locale. Use the production-like build above to test the switcher.





Build both locales:

ng build


Serve the build output:

npx http-server dist/shopping-basket/browser -p 4200


Open:

http://127.0.0.1:4200/en/

http://127.0.0.1:4200/nl/
