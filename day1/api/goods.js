const express = require('express');
const Router = express.Router();
Router.route('/xxx').get((req, res) => {
    let sss = 'ssdsdadas'
    res.send({
        sss,
        ...req.body,
        ...req.query,
    })
}).delete((req, res) => {
    res.send({
        ...req.query,
        ...req.body,
    })
})
module.exports = Router;