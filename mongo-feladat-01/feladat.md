MongoDB alapfeladatok terminálban (Mongo shell-ben)

Elsőként olvasd végig az összes pontot!

Készíts egy videoStore nevű MongoDB adatbázist!
```
use videoStore
```
Hozz létre benne egy movies listát!
```
db.movies.find()
```

Ments el benne 10 új filmet (save()) a következő mezőkkel:
_id: legyen generált, ObjectId
title: egy-egy kedvenc film címe, szöveges tartalom
category: szöveges tartalom (3 típus lehet: fantasy, action, romantic) => legyenek vegyesen a filmek, amennyire lehet
director: szöveges tartalom, 3 rendező közül vegyesen szétválogatva => Steven Spielberg, Clint Eastwood, James Cameron
```
db.movies.save([
... {title: "Ryan közlegény megmentése", category: "action", director: "Steven Spielberg"},
... {title: "München", category: "action", director:"Steven Spielberg"},
... {title: "Jurassic Park", category: "action", director: "Steven Spielberg"},
... {title: "Ready Player One", category: "action", director: "Steven Spielberg"},
... {title: "Amerikai mesterlövész ", category: "action", director: "Clint Eastwood" },
... {title: "Levelek Ivo Dzsimáról ", category: "action", director: "Clint Eastwood" },
... {title: "Államérdek ", category: "action", director: "Clint Eastwood" },
... {title: "Avatar", category: "fantasy", director: "James Cameron" },
... {title: "Titanic", category: "romantic", director: "James Cameron" },
... {title: "Terminátor - A halálosztó", category: "action", director: "James Cameron" }
... ])
```
Frissítsd a listádat (updateMany), mindenki kapjon egy „ratings” mezőt, amely egy üres listát tartalmaz (1-5 ig lehet benne tárolni a szavazatokat)!
```
db.movies.updateMany({}, {$set: {rating:[]}})
```
Adj 3 különböző filmre legalább 2 különböző szavazatot (használd a $push operátort)!
```
db.movies.updateOne( {title: "Jurassic Park"}, {$push:{ratings: [4,3]}}),
db.movies.updateOne( {title: "Ready Player One"}, {$push:{ratings: [1,5]}}),
db.movies.updateOne( {title: "Avatar"}, {$push:{ratings: [2,4]}})
```
Adj hozzá minden filmhez egy „releaseYear” (megjelenés éve) mezőt: kezdetnek állíts be egy tetszőleges évet minden filmnek (pl.: 2000)!
```
db.movies.updateMany({}, {$set: {releaseYear: 2000}})
```
Írd át category típusonként csupa nagybetűre a kategóriákat (pl.: action ==> ACTION legyen mindenhol). Használd az updateMany parancsot!
```
db.movies.updateMany( {}, [{$set: {category: {$toUpper: "$category"} }}] )
```