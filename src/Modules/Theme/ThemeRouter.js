const express = require('express');

const Theme = require('./ThemeController');

const themeRouter = express.Router();

themeRouter.post(
    '/',
    Theme.createOne
);

themeRouter.get(
    '/:id',
    Theme.getOne
);

module.exports = themeRouter;