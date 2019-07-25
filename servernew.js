var querystring = require("querystring");
var showRec = require("./reportsnew.js");
var showRec1 = require("./reportsnew1.js");
var MySQL = require("./dbConnectionnew");
var HTTP = require("http");
var URL = require("url");
var Fs = require("fs");
var con = MySQL();

 let mapping = function indexRequest(req,res,extra) {
	var lookingfor = URL.parse(req.url).pathname;
	console.log("->"+lookingfor);

	if (lookingfor == "/") {
			con.query( "select * from departments",function(err,result){
				if (err){
					console.log(err);
				}else{
					res.writeHead(200,{'Content-Type':'text/HTML'});
					result.forEach(function(record){
						res.write("<A href='/listofemployees?deptno="+ record.deptid+"'> "+ record.name + "</A>");
						res.write("<br>")
					})
					res.end();
		
					}
			}	);
	}

	if (lookingfor == "/listofemployees") {

				var deptno=URL.parse(req.url,true).query.deptno;
				showRec(req, res,deptno);
			}

		if (lookingfor == "/employeeDetails") {

				var employeeno=URL.parse(req.url,true).query.employeeno;
				showRec1(req, res,employeeno);
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