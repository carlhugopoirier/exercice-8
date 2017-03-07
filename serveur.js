var http = require("http");
var fs = require("fs");
var obj1;
fs.readFile('provinces.json', 'utf-8', function (err, data) {
if (err) return console.error(err);
obj = JSON.parse(data)

});

function affiche_objet(obj) {
	var ch='<table>'
for (propriete in  obj) {
	ch+="<tr>"+"<td>"+propriete+'</td>'+'<td>'+obj[propriete]+'</td>'+"</tr>"
}
ch += '</table>'
return ch;
}


http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(affiche_objet(obj));
  response.end();
}).listen(8081);