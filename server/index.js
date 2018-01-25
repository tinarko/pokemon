var express = require('express');
var bodyParser = require('body-parser');
var $ = require('jquery');


var pokemons = require('../server/queries/pokemons.js');
var trainers = require('../server/queries/trainers.js');

var app = express();

app.use( bodyParser.json() );

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/pokemon/:pokemonToCatch', function (req, res) {
  const pokemonToCatch = req.params.pokemonToCatch;
  console.log('searching for',pokemonToCatch);
  console.log(Object.keys($))
  $.ajax({
    url: `http://pokeapi.co/api/v2/pokemon/${pokemonToCatch}`,
    method: 'GET',
    contentType: 'application/json',
    success: function(pokemonData) {
      console.log(pokemonData);
      res.send(pokemonData)
    },
    fail: function(err) {
      throw new Error('unable to find pokemon from pokeAPI')
    }
  });
});

app.listen(1337, function() {
  console.log('listening on port 1337!');
});

