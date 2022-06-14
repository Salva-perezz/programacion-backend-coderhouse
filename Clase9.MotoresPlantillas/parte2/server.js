const express = require('express')
const app = express()
const fs = require('fs');
const rutas = require('./routes/index')

app.use(express.static('public'))



app.engine('cte', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) {
      return callback(new Error(err));
    }
    const rendered = content.toString()
                            .replace('^^titulo$$', ''+ options.titulo +'')
                            .replace('^^mensaje$$', ''+ options.mensaje +'')
                            .replace('^^autor$$', ''+ options.autor +'')
                            .replace('^^version$$', ''+ options.version +'')
                            .replace('^^nombre$$', ''+ options.nombre +'')
                            .replace('^^apellido$$', ''+ options.apellido +'')
                            .replace('^^fechaYhora$$', ''+ options.fechaYhora +'')
    return callback(null, rendered);
  });
});


app.set('views', './views'); // especifica el directorio de vistas
app.set('view engine', 'cte'); // registra el motor de plantillas

app.use('/', rutas)

app.listen(8080, () => {
    console.log('Servidor escuchando puerto 8080')
})