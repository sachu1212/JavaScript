function fun(F){
	F();
}

var msg=function(){
	console.log("Hello");
}

fun(msg);