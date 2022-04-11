const express = require('express');
const { json } = require('express/lib/response');
const fs = require('fs');
const readline = require('readline');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/assets"));

app.get('/', function (req, res) {
    res.render('index');
})

app.get('/characters', function(req, res){
    // Defining the request URL
    var options = {
        url: 'https://api.genshin.dev/characters'
    }

    // Using the request package to pull the information using the options object defined above
    request(options, callback)
    
    // Callback function logging the request body in the console if it was successful
    function callback(error, response, body){
        if (!error && response.statusCode == 200) {
            const characters = JSON.parse(body);
            
            // Rendering test express file while passing in the response object to be used.
            res.render('characters', {characters: characters})
        } else {
            console.log(error)
        }
    }
})

app.get('/characters/:name', function(req , res){
    var name = req.params.name;
    var options = {
        url: `https://api.genshin.dev/characters/${name}`
    }

    // Using the request package to pull the information using the options object defined above
    request(options, callback)
    
    // Callback function logging the request body in the console if it was successful
    function callback(error, response, body){
        if (!error && response.statusCode == 200) {
            const character = JSON.parse(body);
            
            // Rendering test express file while passing in the response object to be used.
            res.render('character', {character: character})
        } else {
            console.log(error)
        }
    }
});

app.listen(8081, function () {
    console.log("Server is up & running!");
})