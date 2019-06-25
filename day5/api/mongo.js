//mongo库
const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const connect = () => new Promise((resolve, reject) => {
    MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true }, (err, client) => {
        if (err) return reject(err);
        let db = client.db("1902");
        resolve({ db, client });
    })
});
//ANCHOR  增
exports.insert = (colName, data) => new Promise(async (resolve, reject) => {
    let { db, client } = await connect();
    let col = db.collection(colName);
    let res = col.insertOne(data);
    resolve(res);
    client.close();
});
//ANCHOR   删
exports.delete = (colName, data) => new Promise(async (resolve, reject) => {
    let { db, client } = await connect();
    let col = db.collection(colName);
    let res = col.deleteMany(data);
    resolve(res);
    client.close();
});
//ANCHOR  改
exports.patch = (colName, query, data) => new Promise(async (resolve, reject) => {
    let { db, client } = await connect();
    let col = db.collection(colName);
    let res = col.updateOne(query, { $set: data });
    resolve(res);
    console.log(res, query, data)
    client.close();
});
//ANCHOR  查
exports.find = (colName, data, { limit, skip, sort } = {}) => new Promise(async (resolve, reject) => {
    let { db, client } = await connect();
    let col = db.collection(colName);
    let res = col.find(data);
    // 跳过的数量
    if (skip) {
        res = res.skip(skip);
    }

    // 限制数量
    if (limit) {
        res = res.limit(limit);
    }

    if (sort) {
        res = res.sort(sort);
    }
    res = await res.toArray();
    resolve(res);
    client.close();
})