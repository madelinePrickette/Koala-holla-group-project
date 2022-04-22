const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION

const pg = require('pg');

const config = {
  database: 'koala-holla',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('connected to postgres');
});

pool.on('error', (err) => {
  console.log('error connecting to postgres', err);
});

module.exports = pool;

// GET

// POST
koalaRouter.post('/',  (req, res) => {
  let newKoala = req.body;
  console.log(`Adding koala`, newKoala);

  let queryText = `INSERT INTO "koalas"
  ("name", "age", "gender", "transferStatus", "notes")
  VALUES
  ($1, $2, $3, $4, $5));`;
  pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.readyForTransfer, newKoala.notes])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error saving new koala`, error);
      res.sendStatus(500);
    });
});

// PUT

koalaRouter.put('/:koalaId', (req, res) => {
  let sqlQuery = `
        UPDATE "koalas"
            SET "transferStatus"=$1
            WHERE "id"=$2;
    `;
  let sqlValues = [true, req.params.koalaId];
  pool
    .query(sqlQuery, sqlValues)
    .then((dbResult) => {
      res.sendStatus(200);
    })
    .catch((dbError) => {
      console.log('error in PUT /koalas db request:', dbError);
    });
});

// DELETE
router.delete('/:koalaId', (req, res) => {
    let koalaToDelete = req.params.koalaId;
    let sqlQuery = `
      DELETE FROM "koalas"
        WHERE "id"=$1;
    `
    let sqlValues = [koalaToDelete];
    pool.query(sqlQuery, sqlValues)
      .then((dbResult) => {
        res.sendStatus(200);
      })
      .catch((dbError) => {
        console.log('error in DELETE /koalas db request:');
        res.sendStatus(500);
      })

    });

module.exports = koalaRouter;
