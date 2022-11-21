const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('./conn');

// This section will help you get a list of all the parts.
recordRoutes.route('/Partes').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('Partes')
    .find({})
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send('Error fetching Parts!');
      } else {
        res.json(result);
      }
    });
});

// This section will help you create a new part.
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


// This section will help you logicaly delete a part.
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