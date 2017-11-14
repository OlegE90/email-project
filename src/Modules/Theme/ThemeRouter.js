import express from 'express';

import ThemeController from './ThemeController';

const themeRouter = express.Router();

themeRouter.post(
    '/',
    ThemeController.createOne
);

themeRouter.get(
    '/:id',
    ThemeController.getOne
);

export default themeRouter;