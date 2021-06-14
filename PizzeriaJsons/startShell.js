// use pizzeria
db.botiga.insertMany([{
   "Botiga_id": "1",
  "adreca":{
    "calle":"Marina 254",
    "codi_postal": "08041",
    "localitat_id": "1"
  }
},{
    "Botiga_id": "2",
  "adreca": 
  {
    "calle": "Fastenrath 66",
  "codi_postal": "08041",
  "localitat_id": "2"
}
},{
  "Botiga_id": "3",
  "adreca":{
    "calle": "Góngora",
    "codi_postal": "08041",
    "localitat_id": "3"
  }
}])
db.cliente.insertMany([{
  "cliente_id": "1",
  "Nom": "Mauri",
  "cognom": "Pari",
  "telefon": "666666666",
  "adreca":{
    "calle": "Otro 2224",
  "codi_postal": "08041",
  "localitat_id": "2"
  }
},{
  "cliente_id": "2",
  "Nom": "Pedro",
  "cognom": "Sanchez",
  "telefon": "666666666",
  "adreca": {
    "calle": "Otro 2224",
    "codi_postal": "08041",
    "localitat_id": "2"
  }
},{
   "cliente_id": "3",
  "Nom": "Hendrix",
  "cognom": "Paloosa",
  "telefon": "666666666",
  "adreca":{
    "calle":  "Inexistente 5554",
    "codi_postal": "08041",
    "localitat_id": "1"
  }
},{
  "cliente_id": "4",
  "Nom": "Joaquina",
  "cognom": "Carlota",
  "telefon": "666666666",
  "adreca":{
    "calle": "Otro 2224",
    "codi_postal": "08041",
    "localitat_id": "2"
  }
  }])
db.comande.insertMany([{
  "comande_id": "1",
  "data_compra": "2021-01-20 00:00:01",
  "tipo": {
  "repartir": true,
  "empleat_id": "3",
  "data_lliurament": "2021-01-20 00:00:01"    
  },
     "preu_total": "99.78",
  "Botiga_id": "1",
  "cliente_id": "1",
  "productes": [{
    "quantitat": "1",
  "preu_cadascun": "8.99",
  "producte_id": "4"
  }, {"quantitat": "3",
    "preu_cadascun": "8.99",
    "producte_id": "2"}]

},{
  "comande_id": "2",
  "data_compra": "2021-01-20 00:00:01",
  "tipo": {
    "repartir": false,
    "empleat_id":1
  },
  "preu_total": "99.78",
  "Botiga_id": "3",
  "cliente_id": "2",
  "productes": [{
    "quantitat": "2",
  "preu_cadascun": "8.99",
  "producte_id": "1"
  }, {"quantitat": "2",
    "preu_cadascun": "8.99",
    "producte_id": "3"},{"quantitat": "1",
      "preu_cadascun": "8.99",
      "producte_id": "1"}]
  
},{
    "comande_id": "3",
  "data_compra": "2021-01-20 00:00:01",
  "tipo": {
    "repartir": true,
    "empleat_id": "2",
    "data_lliurament": "2021-01-20 00:00:01"
  },
  "preu_total": "99.78",
  "Botiga_id": "3",
  "cliente_id": "1",
  "productes":[{
    "quantitat": "4",
  "preu_cadascun": "8.99",
  "producte_id": "1"
  }]
},{
 
  "comande_id": "4",
  "data_compra": "2021-01-20 00:00:01",
  "tipo":
  {"repartir": true,
  "empleat_id": "1",
  "data_lliurament": "2021-01-20 00:00:01"},
  "preu_total": "99.78",
  "Botiga_id": "1",
  "cliente_id": "2",
  "productes":[{"quantitat": "1",
    "preu_cadascun": "8.99",
    "producte_id": "2"}]
  
},{
 
  "comande_id": "5",
  "data_compra": "2021-01-20 00:00:01",
  "tipo":{
    "repartir": false,
    "empleat_id": "3"
  },
  "preu_total": "99.78",
  "Botiga_id": "3",
  "cliente_id": "1",
  "productes":[{
    "quantitat": "3",
  "preu_cadascun": "8.99",
  "producte_id": "2"
  },{"quantitat": "1",
    "preu_cadascun": "8.99",
    "producte_id": "1"}]
},{
  "comande_id": "6",
  "data_compra": "2021-01-20 00:00:01",
  "tipo":{
    "repartir": false,
    "empleat_id": "1"
  },
  "preu_total": "99.78",
  "Botiga_id": "1",
  "cliente_id": "2",
  "productes":[{"quantitat": "6",
    "preu_cadascun": "8.99",
    "producte_id": "2"}]
},{
   "comande_id": "7",
  "data_compra": "2021-01-20 00:00:01",
  "tipo":{
    "repartir": false,
    "empleat_id": "3"
  },
  "preu_total": "99.78",
  "Botiga_id": "2",
  "cliente_id": "1",
  "productes":[{
    "quantitat": "3",
  "preu_cadascun": "8.99",
  "producte_id": "4"

  }]}
]
  )
db.empleat.insertMany([{
   "empleat_id": "1",
  "Nom": "Pedro",
  "Cognom": "Andrade",
  "NIF": "y6464637e",
  "telefon": "555555555",
  "tasca": "repartidor",
  "Botiga_id": 1
},{
   "empleat_id": "2",
  "Nom": "Maic",
  "Cognom": "foooo",
  "NIF": "y6488837e",
  "telefon": "555555555",
  "tasca": "repartidor",
  "Botiga_id": 1
},{
  "empleat_id": "3",
  "Nom": "Pau",
  "Cognom": "Andrade",
  "NIF": "y622227e",
  "telefon": "555555555",
  "tasca": "cocinero",
  "Botiga_id": 1
}])
db.localitat.insertMany([{
 
  "localitat_id": "1",
  "nom": "Barcelona",
  "provincia_id": "1"
},{
  
  "localitat_id": "2",
  "nom": "Madrid",
  "provincia_id": "1"
},{

  "localitat_id": "3",
  "nom": "Girona",
  "provincia_id": "1"
}])
db.producte.insertMany([{
    "producte_id": "1",
  "nom": "Coca-Cola",
  "Tipo": "Bebida",
  "descripcio": "NULL",
  "imatge_url": "NULL",
  "preu": "3.50"  
},{
   "producte_id": "2",
  "nom": "4 quesos",
  "Tipo": "Pizza",
  "descripcio": "NULL",
  "imatge_url": "NULL",
  "preu": "8.00",
  "categoria":{
    "nom": "Vegetarianas"
  }
},{
    "producte_id": "3",
  "nom": "Margherita",
  "Tipo": "Pizza",
  "descripcio": "NULL",
  "imatge_url": "NULL",
  "preu": "2.50",
  "categoria": 
  {
    "nom": "Vegetarianas"
  }
},{
  
  "producte_id": "4",
  "nom": "Con panceta",
  "Tipo": "Hamburgueses",
  "descripcio": "NULL",
  "imatge_url": "NULL",
  "preu": "3.50"
  },{
  
  "producte_id": "5",
  "nom": "Peperoni",
  "Tipo": "Pizza",
  "descripcio": "NULL",
  "imatge_url": "NULL",
  "preu": "8.50",
  "categoria":{
    "nom": "tradicionales"
  }
},{
   "producte_id": "6",
  "nom": "Vegana",
  "Tipo": "Pizza",
  "descripcio": "NULL",
  "imatge_url": "NULL",
  "preu": "13.50",
  "categoria":{
    "nom": "Vegana"
  }
}])
db.provincia.insertMany([{
  
  "provincia_id": "1",
  "Nom": "Barcelona"
},{
  
  "provincia_id": "2",
  "Nom": "Madrid"
},{
  
  "provincia_id": "3",
  "Nom": "Málaga"
}])