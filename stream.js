var fs=require('fs');

var readable=fs.createReadStream('./file.txt');
var count=0;
readable.on('data',function(abc){
    count+=1;
    console.log("Buffer filled"+count);
});
readable.on("end",function(){
    console.log("Data reading from the file is done")
});