const express = require('express');

const app = express();

const mongodb = require('mongodb');
let data = null;
const MongoClient = mongodb.MongoClient;
app.use(express.static('./'));
app.use(express.json(), express.urlencoded({ extended: false }))
app.post('/', (req, res) => {
    MongoClient.connect("mongodb://localhost:27017", (err, client) => {
        if (err) throw err;
        let db = client.db("1902");

        let col = db.collection("user");
        data = col.updateOne(req.body);
        client.close();
        console.log(data);
    })
    console.log("res.data：", data)


})


app.listen(3324, () => {
    console.log('success');
})