var ref=require('http');

var process=function(request,response){
	var lookingfor=request.url;
	if (lookingfor=="/") {
		console.log("HomePage");
	}

	else if (lookingfor=="/inbox") {
		console.log("inbox");
	}
	else if (lookingfor=="/login") {
		console.log("login page");
	}
	else{
		console.log("I hate you my friend");
	}
}

var server=ref.createServer(process);
server.listen(2051);