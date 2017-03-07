var http = require("http");
var fs = require("fs");
var obj;


function affiche_objet(obj) {
	var ch='<table>'
for (propriete in  obj) {
	ch+="<tr>"+"<td>"+propriete+'</td>'+'<td>'+obj[propriete]+'</td>'+"</tr>"
}
ch += '</table>'
return ch;
}


http.createServer(function(request, response) {

console.log(request.url)

	if(request.url=='/provinces') {
		fs.readFile('provinces.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
		obj = JSON.parse(data)
		  response.writeHead(200, {"Content-Type": "text/html"});
		  response.write(data)
		  response.write(affiche_objet(obj));
		  response.end();
		});

	} else {
		fs.readFile('etats.json', 'utf-8', function (err, data) {
		if (err) return console.error(err);
		obj = JSON.parse(data)
		response.writeHead(200, {"Content-Type": "text/html"});
 		response.write(data)
	  response.write(affiche_objet(obj));
 	 response.end();
		});
	}

}).listen(8081);
console.log('Server running.');