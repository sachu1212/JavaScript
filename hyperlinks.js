var URL=require('url');
var HTTP=require("http");
var process=function(require,response){

var lookingfor=URL.parse(require.url,true).pathname;

if(lookingfor=="/"){
	response.writeHead(200,{'content-type':'text/html'});
	response.write("<html>");
	response.write("<center>");
	response.write("<B>Welcome To</B><BR>");
	response.write("<H1>My Home Page</H1>");
	response.write("</html>");
	response.write("<A href='http://localhost:3035/QA'>QA</A>");
	response.write("<p style='text-align':left'>");
	response.end();
}
else if (lookingfor=="/QA") {

	response.writeHead(200,{'content-type':'text/html'});
	response.write("html");
	response.write("center");
	response.write("<B>Welcome To</B><BR>");
	response.write("<H1>QA Consulting</H1>");
	response.write("<html");
	response.write("<A href='http://localhost:3035>'HomePage</A>");
	response.write("<p style='text-align':left'>");
	response.end();
}
}

var server=HTTP.createServer(process);
	server.listen(2052);