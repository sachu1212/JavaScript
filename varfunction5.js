function codered(ch){
	if(ch==1){
		var code=function(A,B){
			Result = A+B;
			console.log("Result is "+Result);
		}
	}
	

	if (ch==2){
		var code=function(A,B){
			console.log("Result: "+(A-B));
		}
				
	}
	return code;
}

var F=codered(2);
F(9,7);