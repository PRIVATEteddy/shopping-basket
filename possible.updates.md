moggelijke update [
1{
routing toevoegen aan het <mat-tab> zodat in de url het veranderd zodat je het kan bookmarken
}

2{
  maak het zodat create account  info pakt van de input en het dan in de json file schrijft 
}







]


eid goal
tabel van json data waar je dingen van kan oppakken en weghalen editen enzovoor daarna grafieken

1 tabel maken met json data /1. Admin product management :Admins can paste/edit product JSON (title, description, price, stock, image URL, category, etc.).

Useful when there’s no fancy CMS yet — JSON form = quick way to seed or update the product catalog.

2 data kunnen toevoegen aan dat tabel

3 data kunnen editen 

4 grafieken toevoegen gebaseerd op die data 

5

6

7



json server run {
1 npx json-server --watch db.json --port 3000
2 npx json-server --watch usersDB.json --port 3001
3 npx json-server --watch adminPanelProducts.json --port 3002
4 npx json-server --watch chart-data.json --port 3003
json file starten meerdere


zoek en filter functio voor het tabel 

search bar material


multible select met the catory dat je meerderen aan kan vinken 

tabel moet meerdere pages hebben en als je in een page gaat moet op het tweede tablet van een tabel en als je dan terug gaat moet je op het tweede tablet zijn en niet op de eerste

tabel tablaaden je gaat naar de tweede kan ga je in een tabel maar je wilt terug zorg ervoor dat je dan op de tweede tab blijft en niet terug bent naar de eerste 
}

multi select heeft meerdere options dus je moet een lijst maken

1 van de lijst[] die bijhoud wat de filters zijn en de andere gewoon de filter lijst 
en dan geven aan de tabl filter



angular i18n angular vertalen

eerst gewoon oefenen met simpel een paar functies/ header vertalen later pas de hele website


nieuwe translatie =ng extract-i18n --format json --output-path src/locale --out-file messages.json




morgen te doen maak van de xlf files json of zorg gewoon dat localization/translatio via json gaat 

daarna maakt je website in 2 verschilende talen en verander de talen met function met een vlaggetje



ngx  translate

maak trans laties met pipe en  {{ component |  translate}}

local storage pseuodo code voor vertaling

kijk of er iets in de localstorage zit zo niet nederlands
