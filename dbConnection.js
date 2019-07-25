var mysql=require('mysql');

module.exports=function connection(){
	var con=mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"",
		database:"tdp"
	});

	con.connect(function(err){
		if (err){
			console.log(err);
			console.log("Error in connectionnnnn")
		}else{
			console.log("Connected!");
		}
	});
	return con;
}