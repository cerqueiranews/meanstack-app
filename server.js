// meanstack/server.js
var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://localhost/meanstack');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express funcionando!');
});