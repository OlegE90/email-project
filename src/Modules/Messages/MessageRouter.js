import express from 'express';

import MessageController from './MessageController';

const messageRouter = express.Router();

messageRouter.param('themeID', MessageController.checkAccessUserToTheme);

messageRouter.post(
    '/:themeID',
    MessageController.createOne
);

messageRouter.get(
    '/:themeID/list',
    MessageController.getList
);

export default messageRouter;