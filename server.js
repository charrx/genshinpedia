const express = require('express');
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/assets"));

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(8081, function () {
    console.log("Server is up & running!");
})