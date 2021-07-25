A videoStore feladat folytatása (update, find, projection)

Normalization elve: Csak a közvetlen összetartozó elemeket tároljuk egy táblázatban (listában). Minél összetettebb egy adat (több tulajdonsággal rendelkezhet, pl.: rendezőnek lehet neve, díjai, filmjei, születési adatai), annál inkább külön listába kell kiszervezni a tárolását.

Készíts el egy „directors” listát, amelyben filmrendezőket fogunk tárolni!
```
db.directors.find()
```
Ments el benne 3 „rendező” dokumentumot az insertOne() parancs segítségével:
"_id": egész szám 1-estől indulva
"name": Steven Spielberg, Clint Eastwood, James Cameron
"birthYear": születési év (tetszőlegesen megadott egész szám)
"movies": kezdetben egy üres lista
```
db.directors.insertOne({"_id": 1, "name": "Steven Spielberg", "birthYear": 1946, "movies": [] })
db.directors.insertOne({"_id": 2, "name": "Clint Eastwood", "birthYear": 1930, "movies": [] })
db.directors.insertOne({"_id": 3, "name": "James Cameron", "birthYear":1954, "movies": [] })
```
Frissítsd a rendezők dokumentumait, helyezd el a „movies” listájukba a megfelelő filmek id-jait (ha ObjectId-t használsz, akkor figyelj arra, hogy ObjectId-ként mentsd el őket). Tipp: kérdezd le a rendezőket, és alájuk listázd a filmeket úgy, hogy csak az id-jük és a rendező nevét adja vissza a lekérdezés
```
db.directors.find()
```
```
db.movies.find({}, {director:1})
```
```
db.directors.find().forEach( director => {
    db.movies.find(
        {_id: 1},
        { director: director.name}
    ).forEach(id => {
        db.directors.updateOne(
            {_id: director._id},
            {$push: {movies: id._id}}
        )
    })
})
```

Ha frissítetted a rendezőket, ellenőrzés gyanánt kérdezd le a dokumentumokat a „directors” listából (használd a pretty() metódust a szebb megjelenítéshez)! Ehhez hasonló eredményt kell látnod.
```
db.directors.find().pretty()
```
Ha elkészültél a rendezői listával, frissítsd a movies listát („táblázatot”): távolítsd el a director mezőt ($unset operátor segítségével). Ezentúl a rendezőn keresztül fogjuk elérni a hozzájuk tartozó filmeket.
```
db.movies.updateMany({}, { $unset: { director : "" } })
````
Kérdezd le az egy bizonyos év előtt készült filmeket, majd az egy bizonyos év után készült filmeket! ($gt, $gte, $lt, $lte)
```
db.movies.find({releaseYear:{$gte:1995}}) db.movies.find({releaseYear:{$lte:2005}})
```
Kérdezz le két év között készült filmeket! (Próbáld ki $and operátorral is!)
```
db.movies.find({$and: [{releaseYear: {$gt: 1995}}, {releaseYear: {$lt:2005}}]})
```
Kérdezz le két év közötti filmeket, amelyek egy bizonyos kategóriával rendelkeznek!
```
db.movies.find({ releaseYear: { $gt: 1995, $lt: 2005 }, category: "ACTION" })
```
Kérdezd le a filmeket, amelyeknek a kategóriája NEM FANTASY ($ne)!
```
db.movies.find({ category: { $ne: "FANTASY" }})
```