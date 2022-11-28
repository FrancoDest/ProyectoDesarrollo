// Loads the configuration from config.env to process.env
require('dotenv').config({ path: './config.env' });

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken')
// get MongoDB driver connection
const dbo = require('./conn');
const recordRoutes = express.Router();


const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
  if (!req.url.toLowerCase().includes("login")) {
    console.log("Por Aca")
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader !== undefined) {
      const bearerToken = bearerHeader.split(" ")[1];
      jwt.verify(bearerToken, 'secretkey', function (err, authData) {

        if (err) {
          res.sendStatus(403)
        } else {
          const Seccion = req.url.split("/")[1];
          const clase = bearerHeader.split(" ")[2];
          console.log(Seccion)
          console.log(clase);
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

app.get('/', (req, res) => {
  //console.log(process.env.HOST);
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
