const request = require('request');
const express = require('express');
const url = require('url');
const Router = express.Router();
const cheerio = require('cheerio');
Router.post('/', async (req, res) => {
    let { num } = req.body;
    let goodslist = [];
    let i = 1;
    //NOTE  递归，递归函数就是在函数体内调用本函数
    function foor() {
        let urlimg = `http://list.jiuxian.com/1-16-0-0-0-0-0-0-0-0-0-0.htm?pageNum=${i}&&area=6`
        request.post(urlimg, async (error, ress, body) => {
            const $ = cheerio.load(body);
            $('.proListSearch li').each((index, item) => {
                let $item = $(item);
                let $img = $item.find('img').attr('src');
                let imgurl = url.resolve(urlimg, $img);
                goodslist.push(imgurl);
            });
            if (i < num * 1) {
                i++;
                foor();
            } else {
                res.json(goodslist)
            }
        });
    }
    foor();

})
module.exports = Router;