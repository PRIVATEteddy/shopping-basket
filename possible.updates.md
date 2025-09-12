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

}
