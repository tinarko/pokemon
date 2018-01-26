var express = require('express');
var bodyParser = require('body-parser');
var fetchUrl = require('fetch').fetchUrl;

var pokemons = require('../server/queries/pokemons.js');
var trainers = require('../server/queries/trainers.js');

var app = express();

app.use( bodyParser.json() );

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/pokemon/:pokemonToCatch', function (req, res) {
  const pokemonToCatch = req.params.pokemonToCatch;
  const url = `http://pokeapi.co/api/v2/pokemon/${pokemonToCatch}`;
  fetchUrl(url, (err, meta, body) => {
    if(err) {
      throw new Error('cannot find pokemon', err);
    }
    const sprite = JSON.parse(body).sprites.front_default;
    res.send(sprite);
  });
});

app.listen(1337, function() {
  console.log('listening on port 1337!');
});

