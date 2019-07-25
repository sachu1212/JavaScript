var HTTP=require("http");
var URL=require('url');
var process=function(request,response){
var path=URL.parse(request.url).pathname;
response.writeHead(200,{'content-type':'text/html'});
response.write("<html>");
if(path=="/"){
	response.write("<Center><H1>SELECT TIMES TABLE</Center>");
	for(var i=1; i<=10; i++){
		response.write("<A href='http://localhost:3035/second?no1="+i+"'>"+i +"</A>");
		response.write("<br>");
	}
	response.end();
}

if (path=="/second"){
	var Firstno=URL.parse(request.url,true).query.no1;
	response.write("<Center><H1>SELECT RANGE FOR TABLES</Center>");
	response.write("Times Table for : "+Firstno);
	response.write("<b>");
	response.write("<Center><A href='http://localhost:3035'>Select different Times Table</A></Center>");
	response.write("<br>");


	for(var i=1; i<=10; i++){
		response.write("<A href='http://localhost:3035/result?no1="+Firstno+"&no2="+i*10 +"'>"+ i*10 +"</A><br>");
		
	}
	response.end();
}

if (path=="/result"){
	var Firstno=URL.parse(request.url,true).query.no1;
	var secondno=URL.parse(request.url,true).query.no2;
	var result=parseInt(Firstno)*parseInt(secondno);
	response.write("<Center><H1>RESULT</Center>");
	response.write("Times Table selected for : "+Firstno);
	response.write("<br>");
	response.write("Range selected : "+secondno);
	response.write("<br>");
	response.write("RESULT for Times Table is :")
	response.write("<br>");
	response.write("<Center><A href='http://localhost:3035/second?no1="+Firstno+"'>Select different Range</A></Center>");
	response.write("<br>");
	response.write("<Center><A href='http://localhost:3035'>Select different Times Table</A></Center>");
    response.write("<br>");
    


	
for(var i=1; i<=secondno; i++){
		response.write(Firstno+" X " +i+" = "+Firstno*i+"<br>");
	
	}
	response.end();
}
}
var server=HTTP.createServer(process);
	server.listen(3035);