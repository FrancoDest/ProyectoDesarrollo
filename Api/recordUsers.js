const express = require('express');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('./conn');

// This section will help you get a list of all the records.
recordRoutes.route('/Usuarios').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('usuarios')
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

// This section will help you create a new record.
recordRoutes.route('/Usuarios').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    Nombre: req.body.Nombre,
    Clase: req.body.Clase,
    Contrasena: req.body.Contrasena,
    Estado: req.body.Estado
  };

  dbConnect
    .collection('usuarios')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting user!');
      } else {
        console.log(`Added a new user with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});
// This section will help you update a password by id.
recordRoutes.route('/Usuarios/Recuperacion').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body._id };
  const updates = {
    $set: {
      Contrasena: req.body.Contrasena,
    },
  };

  dbConnect
    .collection('usuarios')
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

// This section will help you update a class by id.
recordRoutes.route('/Usuarios').put(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: new ObjectId(req.body._id) };
  const updates = {
    $set: {
      Clase: req.body.Clase
    }
  };
  dbConnect
    .collection('usuarios')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating user with id ${listingQuery._id}!`);
      } else {
        console.log(_result);
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
    .collection('usuarios')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error Deleting user with id ${listingQuery._id}!`);
      } else {
        console.log(_result);
        res.status(204).send();
      }
    });
});
recordRoutes.route('/Usuarios/Login').post(async function (_req, res) {

  const dbConnect = dbo.getDb();
  const objective = {
    "Nombre": _req.body.nombre,
    "Contrasena": _req.body.contrasena
  };
  dbConnect
    .collection('usuarios')
    .findOne(objective, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error finding user with name ${_req.body.nombre}!`);
      } else {
        if (_result != null) {
          if (_result.Estado != false) {//Se que es inecesario el != false pero lo hago para que se entienda mas facil el codigo
            jwt.sign({ _result }, 'secretkey', function (err, token) {
              res.json({
                token : token,
                clase :_result.Clase
              })
              console.log(token);
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
