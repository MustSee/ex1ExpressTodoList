var express = require('express');
var app = express();

// Obligé de mettre le répertoir courant pour que ça fonctionne.
var dbModule = require('./config/db');
var todoQueries = require('./model/queriestodo');

app.use('/static', express.static(__dirname + '/assets'));

app.get('/', function (request, response) {
	//if (dbModule) {console.log("connection à la db ok");}
	todoQueries.selectAll();
	response.send("Page d'accueil du projet.");
});

app.get('/:id', (request, response)=>{
	response.send("L'id demandé est "+ request.params.id);
})

app.get('/test/index', (request,  response)=>{
	response.sendFile(__dirname+"/assets/index.html");
})

app.listen(8080);