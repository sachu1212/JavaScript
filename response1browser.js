var http=require('http');
var F=function(request,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.write("html");
	res.write("center");
	res.write("<B>Welcome To</B><BR>");
	res.write("<H1>Nationwide</H1>");
	res.write("<html");
	res.end();
}

var server=http.createServer(F);
	server.listen(2052);