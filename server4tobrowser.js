var http=require("http");
var ref=require("http");

var process=function(request,response){
	response.write("Hello My Friends ");
	response.write("I hate you");
	response.end();
}

var server=ref.createServer(process);
	server.listen(2052);