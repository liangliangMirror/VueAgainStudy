const express = require('express');
const app = express();
const allRouter = require('./api');
app.use(express.static('./'));
app.use('/api2', allRouter);
// app.use('/aaa/*', proxy({
//     target: 'https://www.csdn.net', changeOrigin: true,
//     pathRewrite: {
//         '^/aaa': '/', // rewrite path
//     }
// }))
app.listen(1904, () => {
    console.log('success');
})