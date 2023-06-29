const express = require('express');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')

const recordRoutes = express.Router();

const dbo = require('./conn');

// Para obtener toods los usuarios de la base de datos
recordRoutes.route('/Usuarios').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('Usuarios')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching users!');
      } else {
        res.json(result);
      }
    });
});

// Para crear un usuario
recordRoutes.route('/Usuarios').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    Nombre: req.body.Nombre,
    Clase: req.body.Clase,
    Contrasena: req.body.Contrasena,
    Estado: req.body.Estado
  };

  dbConnect
    .collection('Usuarios')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting user!');
      } else {
        console.log(`Added a new user with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});
// Para recuperar la contraseña, (Para futuro si hago lo de enviar al mail)
recordRoutes.route('/Usuarios/Recuperacion').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body._id };
  const updates = {
    $set: {
      Contrasena: req.body.Contrasena,
    },
  };

  dbConnect
    .collection('Usuarios')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating user with id ${listingQuery.id}!`);
      } else {
        console.log('1 user updated');
        res.status(204).send();
      }
    });
});

// Para actualizar la clase del usuario
recordRoutes.route('/Usuarios').put(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: new ObjectId(req.body._id) };
  const updates = {
    $set: {
      Clase: req.body.Clase
    }
  };
  dbConnect
    .collection('Usuarios')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating user with id ${listingQuery._id}!`);
      } else {
        console.log("Clase actualizada correctamente");
        res.status(204).send();
      }
    });
});

// Borrado logico de Usuarios.
recordRoutes.route('/Usuarios/:_id').delete(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: new ObjectId(req.params._id) };
  const updates = {
    $set: {
      Estado: false
    }
  };

  dbConnect
    .collection('Usuarios')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error Deleting user with id ${listingQuery._id}!`);
      } else {
        console.log("El usuario seleccionado a sido borrado");
        res.status(204).send();
      }
    });
});
//Para que el usuario obtenga su token si se logea correctamente
recordRoutes.route('/Usuarios/Login').post(async function (_req, res) {

  const dbConnect = dbo.getDb();
  const objective = {
    "Nombre": _req.body.nombre,
    "Contrasena": _req.body.contrasena
  };
  console.log(_req.body.nombre, _req.body.contrasena);
  dbConnect
    .collection('Usuarios')
    .findOne(objective, function (err, _result) {
      if (err) {
        console.log("error")
        res
          .status(400)
          .send(`Error finding user with name ${_req.body.nombre}!`);
      } else {
        
        if (_result != null) {
          console.log("No error")
          if (_result.Estado) {
            console.log("result")
            jwt.sign({ _result }, 'secretkey', function (err, token) {
              res.json({
                token : token,
                clase :_result.Clase
              })
              res.status(204).send();
            });
          } else {
            res.status(403).send();
          }
        } else {
          res.status(403).send();
        }

      }
    });

});
module.exports = recordRoutes;
