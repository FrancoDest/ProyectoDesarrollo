const express = require('express');
const { ObjectId } = require('mongodb');
const recordRoutes = express.Router();

const dbo = require('./conn');

// Para obtener los molinos de la base de datos
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

// Para agregar un nuevo molino a la bd
recordRoutes.route('/Molino').post(function (req, res) {
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

//Para aprobar de Molinos.
recordRoutes.route('/Molinos/aprobar').put(function (req, res) {
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
          .send(`Error updating user with id ${listingQuery._id}!`);
      } else {
        console.log("Molino aprobado");
        res.status(204).send();
      }
    });
});
  // Para rechazar de Molinos.
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
        console.log("Molino no aprobado");
      }
    });
  }
);

module.exports = recordRoutes;