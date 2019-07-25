var querystring = require("querystring");
var showRec = require("./reports.js");
var MySQL = require("./dbConnection");
var HTTP = require("http");
var URL = require("url");
var Fs = require("fs");
var con = MySQL();

 let mapping = function indexRequest(req,res,extra) {
	var lookingfor = URL.parse(req.url).pathname;
	console.log("->"+lookingfor);
	if (lookingfor == "/") {
		Fs.readFile('./index.html', function (error, data) {
			if (error) {
				res.writeHead(404);
				res.write('FILE NOT FOUND');
			}
			else {
				res.write(data);
				res.write("good");
			}
			res.end();
		});
	}

	if (lookingfor == "/showallrecords") {
		console.log("here!");
		var dno=URL.parse(req.url,true).query.did;
		showRec(req, res,dno);
	}

	if (lookingfor=="/entryform"){
		Fs.readFile('./Entry.html',function(error,data){
			if (error){
				res.writeHead(404);
			}else{
				res.write(data);
							}
			res.end();
		})
	}

	if (lookingfor=="/insertRecord"){
		var data="";
		var record="";
		req.on("data",function(chunk){
			data+=chunk;
		});
req.on("end",function(){
	record=querystring.parse(data);
	var sql=`insert into personal values(${record.pno},'${record.name}','${record.email}',${record.telephone},${record.deptid})`;

	con.query(sql,function(error,result){
		if(error){
			console.log("Error: "+Error)
		}
		else{
			console.log(result);
		}
	});
})

	}
}

let server = HTTP.createServer(mapping);
 server.listen(8000);