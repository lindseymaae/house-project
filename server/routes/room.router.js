const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated , (req, res) => {

    const queryText = `Select * from room`
    pool.query(queryText)
        .then((response) => {
            console.log(response.rows)
            res.send(response.rows)
        .catch((err) => {
            console.log('Error completing SELECT item query', err);
            res.sendStatus(500);
                });
});
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;