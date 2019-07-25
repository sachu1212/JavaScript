var http=require("http");
var URL=require("url");

var process=function(request,response){
	var data=URL.parse(request.url,true);
	var no1=parseInt(data.query.no1);
	var no2=parseInt(data.query.no2);
	if (data.pathname=="/Sub") {
		response.write("Result is : "+(no1-no2));
		response.end();
	}
	else if (data.pathname=="/Add"){
		response.write("Result is : "+(no1+no2));
		response.end();
	}
	else {
		response.write("I dont know what you want: ");
		response.end();
}
}

	var server=http.createServer(process);
	server.listen(2052);