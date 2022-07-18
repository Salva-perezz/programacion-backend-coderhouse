db.producto.insertMany([{nombre: 'Lapiz', precio: 10, stock: 100}, {nombre: 'Regla', precio: 20, stock: 500}, {nombre: 'Compas', precio: 25.6, stock: 25}])

db.producto.find()
db.cliente.find()

db.producto.estimatedDocumentCount()

/* --------------------------------------------------------------------------------------------------------------- */

db.user.find({name: 'Jeronimo', edad: {$gte: 20}})
db.user.find({$and: [{edad: {$gte: 25}}, {edad: {$lte: 30}}]})
db.user.find({$and: [{nombre: 'Jeronimo'}, {edad: {$gt: 30}}]})
db.user.find({$or: [{edad: 25}, {edad: 24}]})
db.user.find({nombre: {$not: {$eq: 'Jeronimo'}}})
db.user.find({edad: {$not: {$gte: 30}}})

db.user.distinct('nombre')

//CON FILTRO
db.user.find({nombre: 'Jeronimo'}, {_id: 0, apellido: 1, edad: 1})
//SIN FILTRO (TODOS)
db.user.find({}, {_id: 0, apellido: 1, edad: 1})

db.user.find().sort({edad: 1})
db.user.find().sort({edad: -1})

db.user.find().sort({edad: 1}).limit(1)

db.user.find().sort({nombre: 1}).skip(5).limit(6)

db.user.update({nombre: 'Pepe'}, {$set: {nombre: 'Jose', edad: 21}})

db.user.deleteOne({nombre: 'Jose'})
db.user.deleteMany({nombre: 'Jeronimo'})
db.user.deleteMan({})


/* ---------------------------------------------------------------------------------------- */
db.cliente.find().sort({edad: -1})
db.cliente.find().sort({edad: 1}).limit(1)
db.cliente.find().sort({edad: 1}).skip(1).limit(1)
db.cliente.find({$and: [{nombre: 'Juan'}, {edad: 29}]})
db.cliente.find({$or: [{nombre: 'Juan'}, {nombre: 'Lucia'}]})
db.cliente.find({edad: {$gt: 25}})
db.cliente.find({edad: {$lte: 25}})
db.cliente.find({$and: [{edad: {$gte: 26}}, {edad: {$lte: 35}}]})
db.cliente.update({nombre: 'Fede'}, {edad: {$inc: 1}})
db.cliente.updateMany({edad: 29}, {$set: {edad: 26}})
db.cliente.deleteMany({nombre: 'Juan'})


/*
Pasos para crear un usuario
  - Sobre la base de datos admin (use admin) ejecutar los siguiente comandos:
            db.createUser(
    {
      user: "salva", El usuario que quiereas
      pwd: "qwerty123", El password que quieras
      roles: [
         { role: "read", db: "mibase" } Este usuario solo tiene permiso de lectura
      ]
    }
  )

    db.createUser(
    {
      user: "pepe", El usuario que quieras
      pwd: "qwerty123", El password que quieras
      roles: [
         { role: "readWrite", db: "mibase" } Este usuario tiene permisos de lectura y escritura
      ]
    }
  )

  Una vez hecho esto salimos de mongo cli y en la consola en la que tenemos iniciado el servidor de mongo apretamos ctrl + c hasta que se termine el proceso y volvemos a correrlo agregandole --auth, ejemplo: mongod --auth --dbpath ./la/ruta/a/tu/carpeta
  Una vez iniciado nuevamente el servidor vamos a la consola donde teniamos nuestro mongo cli e iniciamos nuevamente el cliente de esta forma mongo -u [user] -p [password]
*/
