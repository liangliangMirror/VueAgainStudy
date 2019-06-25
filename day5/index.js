const express = require('express');

const app = express();

const allRouter = require('./api');

app.use(express.static('/'));

app.use(allRouter);

app.listen(3848, () => {
    console.log('success');
})