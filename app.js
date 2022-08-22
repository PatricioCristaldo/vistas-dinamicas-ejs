/* Livereload */
const livereload = require('livereload');
const liveReloadServer = livereload.createServer();

/* Entry point */
const express = require('express');
const app = express();
const port = 3000;
const connectLivereload = require('connect-livereload');
const path = require('path');

/*Requerir Rutas */
const indexRouter = require('./routes/index')



/* Archivos estaticos monitoreados */
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs')

//Middlewares
app.use(express.json()); //si se usa JSON CLASE54, 1:10:48
app.use(express.static(path.resolve(__dirname,'public')));

//Rutas
app.use("/", indexRouter);
app.use("/detalleMenu", indexRouter);

/* Levantamos el servidor con app listen */
app.listen(port,function(){
    return console.log(`Se levanta el servidor en http://localhost:${port}`)
});


/* Rutas 
app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));
app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')));
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
app.get('/detalles',(req,res) => res.sendFile(path.resolve(__dirname,'views','detalles.html')));
app.get('/carrito',(req,res) => res.sendFile(path.resolve(__dirname,'views','carrito.html')));*/

/* Funcion de actualizacion del servidor 
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 50);
  });*/
