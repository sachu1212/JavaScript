var express=require("express");
var cookieparser=require("cookie-parser");
var app=express();
app.use(cookieparser());

app.get("/", function(req,response){
    response.write("<H1>Select The Table</H1>");
    for(i=1; i<=10; i++){
        response.write("<A href='http:/localhost:3035/selectRange?no1="+i+"'>"+i+"</A>");
        response.write("<br>");
    }
    response.end();
})

app.get("/selectRange/:T",function(req,response){
    response.cookie("Table",req.params.T)
    response.write("selectRange",req.params.Range)
    for(i=10;i<=100;i+=10){
        response.write("<A href='localhost:3035/showtimestable/"+i+"'>"+i+"</A");
        response.write("<br>");
    }
});

app.get("/showtimes/:Range",function(req,response){
    var Table=req.cookies.Table;
    var Range=req.params.Range;
    var result=parseInt(Table)*parseInt(Range);
    response.write("<Center><H1>RESULT</Center>");
	response.write("Times Table selected for : "+Table);
	response.write("<br>");
	response.write("Range selected : "+Range);
	response.write("<br>");
	response.write("RESULT for Times Table is :")
	response.write("<br>");
	response.write("<Center><A href='http://localhost:3035/showtimestable="+Range+"'>Select different Range</A></Center>");
	response.write("<br>");
	response.write("<Center><A href='http://localhost:3035'>Select different Times Table</A></Center>");
    response.write("<br>");
});

app.listen(3035,function(){
    console.log("Cookie Started")
});