import express from 'express';

const testRouter = express.Router();

testRouter.get(
    '/',
    (req, res) => {
        res.json(req.user);
    }
);

export default testRouter;