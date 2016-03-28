/*
create a basic server	
var http = require('http');

http.createServer(function(req, res){
	//request = req, respnse = res
	res.writeHead(200,{'Content-type':'text/plain'}); //200 is a normal HTTP request with no errors (ex:404)
	res.end('Hello!');
	
}).listen(1337,'127.0.0.1'); //listen on port 1337 with the server IP/address being 127.0.0.1
console.log('Webserver has started'); */

var http = require('http');
var fs = require('fs'); //fileserver

http.createServer(function(req, res){
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'Content-type':'text/html'}); 
		res.end(data);
	});
}).listen(1337,'127.0.0.1'); 
console.log('Webserver has started');