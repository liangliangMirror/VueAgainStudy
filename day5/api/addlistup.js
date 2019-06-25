//发起请求
const express = require('express');

const Router = express.Router();

const url = require('url');

const querystring = require('querystring');

const { insert, find, delete: deletes, patch } = require('./mongo');

const { formatData } = require('./format');



Router.route('/')
    .post(async (req, res) => {
        let data = await insert('user', req.body);
        res.send(formatData({ data }));
    })
    .get(async (req, res) => {
        let query = querystring.parse(url.parse(req.url).query);
        let data = await find('user', query);
        res.send(data);
    }).delete(async (req, res) => {
        let data = await deletes('user', req.body);
        res.send(formatData({ data }));
    }).patch(async (req, res) => {
        let { key1, value1, key2, value2 } = req.body;
        let data = await patch('user', { [key1]: value1 }, { [key2]: value2 });
        res.send(formatData({ data }));
    })
module.exports = Router;