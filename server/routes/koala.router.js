const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION


// GET


// POST


// PUT


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