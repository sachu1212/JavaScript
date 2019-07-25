var ref=require("http");
var URL=require("url");

var process=function(req,res){
	var data=URL.parse(req.url,true);
	var no1=parseInt(data.query.no1);
	var no2=parseInt(data.query.no2);
	if (data.pathname=="/Sub") {
		console.log("Result is : "+(no1-no2));
	}
	else if (data.pathname=="/Add"){
		console.log("Result is : "+(no1+no2));
	}
	else {console.log("I hate you my friend");
}
}

	var server=ref.createServer(process);
	server.listen(2052);