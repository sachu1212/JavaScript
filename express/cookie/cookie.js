

var express=require("express");
var cookieparser=require("cookie-parser");

var app=express();
app.get("/makecookie", function(req,res){
    res.cookie("QA_Cookie1","Express-cookies by shafeeq");
    res.end("cookies created");
});

app.get("/readcookie",function(req,res){
    res.write(req.cookies.QA_Cookie1)
    res.end();
});

app.get("/removecookie",function(req,res){
    res.clearCookie("QA_Cookie1")
    res.end("cookies removed");
});