var express=require("express");
var app=express();
app.set('view engine','ejs');

app.get("/Marksheet",function(request,response){
    response.render("index.ejs",{
        "name":"Shafeeq",
        "physics":"90",
        "chemistry":"98",
        "maths":"98",
           
    });
});

app.listen(8000);