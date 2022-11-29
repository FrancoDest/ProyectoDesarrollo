// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });
const express = require('express');

const bodyParser = require('body-parser');
const path =require('path');
const fs = require('fs')
//cosas de subir imagenes arriba

const cors = require('cors');
const jwt = require('jsonwebtoken')
const dbo = require('./conn');
const recordRoutes = express.Router();


const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json({limit: "100mb"}));//Aumento el limite de tamaño del payload para que puedan cargarse imagenes con buena resolución
app.use(cors());
app.use(express.json());


app.use(function (req, res, next) {
  if (!req.url.toLowerCase().includes("login")) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader !== undefined) {
      const bearerToken = bearerHeader.split(" ")[1];
      jwt.verify(bearerToken, 'secretkey', function (err, authData) {

        if (err) {
          res.sendStatus(403)
        } else {
          const Seccion = req.url.split("/")[1];
          const clase = bearerHeader.split(" ")[2];
          switch (Seccion){
            case 'Usuarios':
              if(clase == 'Administrador'){
                next()
              }
              break;
              case 'Molinos':
              if(clase == 'Administrador' || clase == 'Auditor'){
                next()
              }
              break;
              case 'Partes':
              if(clase == 'Administrador' || clase == 'Operario'){
                next()
              }
              break;
              case 'Molino'://Esta es una subdivision de molino, la separé ya que el operario debe ser capas de crear un molino pero no de ver los hechos
              if(clase == 'Administrador' || clase == 'Operario'){
                next()
              } break;
              case 'uploadBase64':{
                next()
              }
              break;
              default:
                res.sendStatus(403)
                break;
          }          
        }
      })

    } else {
      res.sendStatus(403)
    }
  } else {
    next();
  }

})

app.use(require('./recordUsers'));
app.use(require('./recordWindMill'));
app.use(require('./recordParts'));


app.post('/uploadBase64', (req,res) => {//Dejo el post aqui porque necesito lo del tamaño limite del body parser y poniendolo en un sub archivo no encontre forma de que andara este limite
  console.log("aca")
  let filePath= '../angular-Vientos-Del-Este/src/assets/' + req.body.name
  let buffer= Buffer.from(req.body.base64.split(',')[1],"base64");
  fs.writeFileSync(path.join(__dirname,filePath),buffer);
  res.send(filePath);
});

app.get('/', (req, res) => {
  res.status(200).send('Hello people!' + process.env.HOST);
});

// Global error handling
app.use(function (err, _req, res) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// perform a database connection when the server starts
dbo.connectToServer(function (err) {
  if (err) {
    console.error(err);
    process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
