function Maths(func){
	func(7,6);
}

var Add=function(A,B){
	Result=A+B;
	console.log("Result : ", Result);
}

var Sub=function(A,B){
	Result=A-B;
	console.log("Result : ", Result);
}

Maths(Add);
Maths(Sub);