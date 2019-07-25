var dbfcon=require('./dbConnection');

module.exports=function showRecords(request,response,did){
	var con=dbfcon();
	
		var query="select*from personal where deptid="+did
	
	con.query(query,function(err,result){
		if (err){
			console.log("Errorr");
		}
		else{
			response.writeHead(200,{'Content-Type':'text/HTML'});
			result.forEach(function(record){
				console.log(record);
				
				response.write("<A href='/employeeDetails?employeeno="+ record.pno+"'> "+ record.name + "</A>");
				response.write("<br>");
				
			})
			response.end();
		}
	});
}