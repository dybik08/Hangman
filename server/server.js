const express = require('express');
const bodyParser= require('body-parser');
// const _ = require('lodash');
const app = express();
const ObjectId = require('mongodb').ObjectId;

const MongoClient = require('mongodb').MongoClient;

let db;

MongoClient.connect('mongodb://admin:password123@ds255463.mlab.com:55463/hangman-words', { useNewUrlParser: true }, (err, client) => {
    if (err) return console.log(err);
    db = client.db('hangman-words');
    app.listen(8000, () => {
        console.log('listening on 8000')
    })
});

app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

findAll = (req, res) => {
    db.collection("owoce").find().toArray(function(err, data) {
        res.send(data[0].fruits);
    });
};

app.get('/api/results', findAll);