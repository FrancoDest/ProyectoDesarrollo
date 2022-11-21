const express = require('express');

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
    Base : {
      Categoria: req.body.Base.Categoria,
      Foto: req.body.Base.Foto,
      Altura: req.body.Base.Altura,
      ResistenciaEolica: req.body.Base.ResistenciaEolica,
      Material: req.body.Base.Material
    },
    Cuerpo : {
      Categoria: req.body.Cuerpo.Categoria,
      Foto: req.body.Cuerpo.Foto,
      Altura: req.body.Cuerpo.Altura,
      ResistenciaEolica: req.body.Cuerpo.ResistenciaEolica,
      Material: req.body.Cuerpo.Material
    },
    Aspa : {
      Categoria: req.body.Aspa.Categoria,
      Foto: req.body.Aspa.Foto,
      Altura: req.body.Aspa.Altura,
      ResistenciaEolica: req.body.Aspa.ResistenciaEolica,
      Material: req.body.Aspa.Material
    },
    Nombre: req.body.Nombre,
    Descripcion: req.body.Descripcion,
    Estado : req.body.Estado
  };

  dbConnect
    .collection('Molinos')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        res.status(400).send('Error inserting windmills!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
});

// This section will help you update a Windmill by id.
recordRoutes.route('/Molinos/Update').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body.id };
  const updates = {
    $Set: {
      Nombre: req.body.Nombre,
      Descripcion: req.body.Descripcion,
      ResistenciaEolica : req.body.ResistenciaEolica,
      Estado :req.body.Estado
    },
  };

  dbConnect
    .collection('Molinos')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log('1 document updated');
      }
    });
});

// Aprobado de Molinos.
recordRoutes.route('/Usuarios/Approve').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body.id };
  const updates = {
    $inc: {
      Estado: "True",
    },
  };
    dbConnect
    .collection('Molinos')
    .updateOne(listingQuery, disapprove, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error Approving id ${listingQuery.id}!`);
      } else {
        console.log('1 Windmill Aprooved');
      }
    });
  }
  );
  // Aprobado de Molinos.
recordRoutes.route('/Usuarios/Disapprove').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body.id };
  const updates = {
    $inc: {
      Estado: "False",
    },
  };
    dbConnect
    .collection('Molinos')
    .updateOne(listingQuery, disapprove, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error Disapproving id ${listingQuery.id}!`);
      } else {
        console.log('1 Windmill Disapproved');
      }
    });
  }
);

module.exports = recordRoutes;