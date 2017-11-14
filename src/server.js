import express from 'express';
import mongoose from 'mongoose';

import config from './config';
import commonMiddleware from './commonMiddleware';

//Routes
import apiRouter from './Routes/apiRouter';
import authRouter from './Routes/authRouter';
import testRouter from './Routes/testRouter';

const PORT = process.env.PORT || 5000;

let app = express();

mongoose.connect(config.mongodb_uri);

commonMiddleware(app);

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/test', testRouter);

export default app;