var ref=require('http');
var MyFunction=function(request,response){
	console.log("Hello My Friend");
}

server=ref.createServer(MyFunction);
server.listen(4052);
