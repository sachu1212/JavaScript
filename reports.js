var dbfcon=require('./dbConnection');

module.exports=function showRecords(request,response,deptid){
	var con=dbfcon();
	if(deptid==0){
		var query="select*from personal"
	}
	else{
		var query="select*from personal where deptid="+deptid
	}
	con.query(query,function(err,result){
		if (err){
			console.log("Errorr");
		}
		else{
			response.writeHead(200,{'Content-Type':'text/HTML'});
			result.forEach(function(record){
				console.log(record);

				response.write("   "+record.pno);
				response.write("   "+record.name);
				response.write("   "+record.deptid);
				response.write("   "+record.email);
				response.write("   "+record.telephone);
				response.write("<br>");
				
			})
			response.end();
		}
	});
}