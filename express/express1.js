var express=require("express")
var app=express();

app.get("/delete",function(req,res){
    res.send("Hello");
});

app.post("/process",function(req,res){
    res.send("how are u");
});

app.put("/process",function(req,res){
    res.send("my old");
});

app.put("/process",function(req,res){
    res.send("friend");
});

app.listen(8000);