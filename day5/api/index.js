const express = require('express');

const Router = express.Router();

// const addlist = require('./addlist');
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST,GET,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', '*');

    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else { next(); }
}
Router.use(allowCrossDomain);
const addlistup = require('./addlistup');

const python = require('./python');

Router.use(express.json(), express.urlencoded({ extended: false }));

// Router.use('/add', addlist);

Router.use('/addlist', addlistup);
Router.use('/python', python);

module.exports = Router;