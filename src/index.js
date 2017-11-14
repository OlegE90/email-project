const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');
const commonMiddleware = require('./commonMiddleware');

//Routes
const apiRouter = require('./Routes/apiRouter');
const authRouter = require('./Routes/authRouter');
const testRouter = require('./Routes/testRouter');

const PORT = process.env.PORT || 5000;

let app = express();

mongoose.connect(config.mongodb_uri);

commonMiddleware(app);

app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/test', testRouter);

app.listen(PORT);
