var express=require("express")
var app=express();

app.use(function(req,res,next){
    console.log("I am ---Middleware");
    next();
});

app.use("/",function(req,res,next){
    console.log("I am first Middleware No 2");
    next();
});

app.use("/login",function(req,res,next){
    console.log("I am the login route");
    next();
});


app.get("/",function(req,res){
    res.send("Welcome to Home Page");
});

app.get("/login",function(req,res){
    res.send("Welcome to Login Page");
});
app.get("/logout",function(req,res){
    res.send("Welcome to logout Page");
});

var server=app.listen(8000);