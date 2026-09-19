// IMPORTAMOS "express" PARA CREAR EL SERVIDOR
const express = require('express');
// IMPORTAMOS "body-parser" PARA MANEJAR SOLICITUDES HTTP QUE CONTENGAN DATOS EN EL CUERPO
const bodyParser = require('body-parser')
const app = express();

// CONFIGURAMOS "body-parser" PARA PARSEAR DATOS EN FORMATO URLENCODED Y JSON
app.use(bodyParser.urlencoded({extended: false}))// Permite procesar datos enviados desde formularios
app.use(bodyParser.json())

// DEFINIMOS EL PUERTO EN EL QUE SE EJECUTARÁ EL SERVIDOR
const PORT = 3001;

// IMPORTAMOS "mongoose" PARA MANEJAR LA CONEXIÓN CON MONGODB
const mongoose = require('mongoose');

// CONEXIÓN A LA BASE DE DATOS
mongoose.connect('mongodb://localhost:27017/BD_Tareas', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado a BD_Tareas"))
.catch(err => console.error("Error de conexión:", err));


// CONFIGURACIÓN DEL MOTOR DE PLANTILLAS EJS
app.set('view engine', 'ejs');// Usaremos EJS como motor de plantillas
app.set('views',__dirname + '/views');// Definimos la ruta donde estarán las vistas (plantillas)

// RUTA PARA ARCHIVOS ESTATICOS EN ESTE CASO LA CARPETA "public"
app.use(express.static(__dirname + "/public"));

// DEFINIMOS LAS RUTAS QUE USARÁ EL SERVIDOR
app.use('/', require('./router/rutas'));// Ruta principal con su respectivo archivo de manejo
app.use('/usuario', require('./router/Usuarios'));

// PUERTO DEL SERVIDOR
app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto: ${PORT}`);
})


// PARA SEGUIR TRABAJANDO Y SUBIR LOS CAMBIOS QUE SE HAGAN
// git add .
// git commit -m "Descripción de los cambios"
// git push origin main