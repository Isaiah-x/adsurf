const express = require('express');
const app = express();
const adRouter = require('./routes/adRoutes');
const userRouter = require('./routes/userRoutes');

// ROUTES
app.use('/api/v1/ads', adRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
