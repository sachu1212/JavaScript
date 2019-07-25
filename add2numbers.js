var HTTP=require("http");
var URL=require('url');
var process=function(request,response){
var path=URL.parse(request.url).pathname;
response.writeHead(200,{'content-type':'text/html'});
response.write("<html>");
if(path=="/"){
	response.write("<Center><H1>SELECT FIRST NUMBER</Center>");
	for(var i=1; i<=10; i++){
		response.write("<A href='http://localhost:3035/second?no1="+i+"'>"+i +"</A>");
		response.write("<br>");
	}
	response.end();
}

if (path=="/second"){
	var Firstno=URL.parse(request.url,true).query.no1;
	response.write("<H1>SELECT SECOND NUMBER</H1>");
	response.write("First Number was : "+Firstno);
	response.write("<br>");
	for(var i=1; i<=10; i++){
		response.write("<A href='http://localhost:3035/result?no1="+Firstno+"&no2="+i +"'>"+ i +"</A><br>");
		
	}
	response.end();
}

if (path=="/result"){
	var Firstno=URL.parse(request.url,true).query.no1;
	var secondno=URL.parse(request.url,true).query.no2;
	var result=parseInt(Firstno)+parseInt(secondno);
	response.write("<H1>RESULT</H1>");
	response.write("First Number was : "+Firstno);
	response.write("<br>");
	response.write("Second Number was : "+secondno);
	response.write("<br>");
	response.write("RESULT for addition is :")
	response.write(result.toString());
	response.end();
	}
	
}


var server=HTTP.createServer(process);
	server.listen(3035);