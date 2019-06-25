const express = require('express');
const Router = express.Router();
const goodRouter = require('./goods');
Router.use(express.json(), express.urlencoded({ extended: false }));
Router.use('/goods', goodRouter);
module.exports = Router;