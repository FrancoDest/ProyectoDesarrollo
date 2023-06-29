const express = require('express');

const recordRoutes = express.Router();

const dbo = require('./conn');

//Para levantar las partes de la base de datos
recordRoutes.route('/Partes').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  console.log("sopa")
  
  dbConnect
    .collection('Partes')
    .find({})
    .limit(10000)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching Parts!');
      } else {
        res.json(result);
      }
    });
});

//Para agregar una parte a la bd
recordRoutes.route('/Partes').post( function (req, res) {
  const dbConnect = dbo.getDb();
  const parte = {
    Categoria: req.body.Categoria,
    Foto: req.body.Foto,
    Altura: req.body.Altura,
    ResistenciaEolica: req.body.ResistenciaEolica,
    Material: req.body.Material
  };

  dbConnect
    .collection('Partes')
    .insertOne(parte, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting Part!');
      } else {
        console.log(`Added a new Part with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});


// Para borrar logicamente una parte
recordRoutes.route('/Partes/:_id').delete((req, res) => {
  const dbConnect = dbo.getDb();
  const listingQuery = { listing_id: req.body._id };

  dbConnect
    .collection('Partes')
    .deleteOne(listingQuery, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error deleting part with id ${listingQuery.listing_id}!`);
      } else {
        console.log('1 part deleted');
      }
    });
});

module.exports = recordRoutes;