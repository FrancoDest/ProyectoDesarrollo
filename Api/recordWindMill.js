const express = require('express');
const { ObjectId } = require('mongodb');
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('./conn');

// This section will help you get a list of all the Windmill.
recordRoutes.route('/Molinos').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('Molinos')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching windmills!');
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new Windmill.
recordRoutes.route('/Molinos').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const matchDocument = {
    Aspa : req.body.Aspa,
    Cuerpo : req.body.Cuerpo,
    Base : req.body.Base,
    Nombre: req.body.Nombre,
    Descripcion: req.body.Descripcion,
    estado : req.body.estado
  };

  dbConnect
    .collection('Molinos')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting windmills!');
      } else {
        console.log(`Added a new windmill with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});

// Aprobado de Molinos.
recordRoutes.route('/Molinos/aprobar').put(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: new ObjectId(req.body._id) };
  const updates = {
    $set: {
      estado: req.body.estado
    }
  };
  console.log(listingQuery);
  dbConnect
    .collection('Molinos')
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
  // Aprobado de Molinos.
recordRoutes.route('/Molinos/rechazar').put(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: new ObjectId(req.body._id) };
  const updates = {
    $set: {
      estado: req.body.estado
    }
  };
    dbConnect
    .collection('Molinos')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error Disapproving id ${listingQuery.id}!`);
      } else {
        console.log(_result);
      }
    });
  }
);

module.exports = recordRoutes;