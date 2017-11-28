import express from 'express';

import ThemeController from './ThemeController';

const themeRouter = express.Router();

themeRouter.param(':id', ThemeController.findByParam);

themeRouter.post(
    '/',
    ThemeController.createOne
);

themeRouter.get(
    '/list',
    ThemeController.getList
);

themeRouter.route('/:id')
    .get(ThemeController.getOne)
    .delete(ThemeController.deleteOne)
    .put(ThemeController.changeOne);

export default themeRouter;