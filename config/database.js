// config/database.js
var mongoose = require('mongoose');

module.exports = function(uri){
	mongoose.connect(uri, {server: {poolSize: 15}});
	
	mongoose.connection.on('connected', function(){
		console.log('MongoDB conectado em ' + uri);
	});
	
	mongoose.connection.on('disconnected', function(){
		console.log('MongoDB desconectado em ' + uri);
	});
	
	mongoose.connection.on('error', function(erro){
		console.log('MongoDB erro de conexão: ' + erro);
	});
	
	process.on('SIGINT', function(){
		mongoose.connection.close(function(){
			console.log('MongoDB desconectado pelo encerramento da aplicação.');
			process.exit(0);
		});
	});
}