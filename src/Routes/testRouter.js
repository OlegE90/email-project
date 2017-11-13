const express = require('express');

const testRouter = express.Router();

testRouter.get(
    '/',
    (req, res) => {
        res.json(req.user);
    }
);


module.exports = testRouter;