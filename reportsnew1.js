var dbfcon=require('./dbConnection');

module.exports=function showRecords(request,response,name){
	var con=dbfcon();
	if(name==0){
		var query="select*from personal"
	}
	else{
		var query="select*from personal where pno="+name
	}
	con.query(query,function(err,result,name){
		if (err){
			console.log("Errorr");
		}
		else{
			response.writeHead(200,{'Content-Type':'text/HTML'});
			result.forEach(function(record){
				console.log(record);
				
				response.write("   "+record.pno);
				response.write("<br>");
				response.write("   "+record.name);
				response.write("<br>");
				response.write("   "+record.email);
				response.write("<br>");
				response.write("   "+record.telephone);
				response.write("<br>");
				response.write("   "+record.deptid);
				response.write("<br>");
				response.write("<A href='Delete'></A>");
				response.write("<br>");
				
			})
			response.end();
		}
	});
}