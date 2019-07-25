var express=require("express")
var app=express();

app.route('/shafeeq')
.get(function(req,res){
    res.send("Shafeeq, GET Method called");
})

.post(function(req,res){
    res.send("Shafeeq, POST Method called");
})

.put(function(req,res){
    res.send("Shafeeq, PUT Method called");
});

app.route('/qaconsulting')
.get(function(req,res){
    res.send("qaconsulting, GET Method called");
})
.post(function(req,res){
    res.send("qaconsulting, POST Method called");
})
.put(function(req,res){
    res.send("qaconsulting, PUT Method called");
});

app.listen(8000);