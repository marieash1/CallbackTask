function calculate(num1:  number, num2: number, op:string) {
        if(op=="+"){
           console.log(num1 + num2);
        }
        else if(op=="-"){
            console.log(num1 - num2);
        }
        else if(op=="*"){
            console.log(num1 * num2);
        }
        else if(op=="/"){
            console.log(num1 / num2);
        }
        else{
            console.log("Invalid Operator");
        }
}
function callingFunction(var1: number, var2: number, operator:string, callback: (num1:number, num2:number, op:string) => void)
{   
    console.log(`${var1} ${operator} ${var2}=`);
    callback(var1,var2,operator);
}

callingFunction(5,0,"/", calculate);
callingFunction(5,2,"*", calculate);
callingFunction(5,9,"+", calculate);
callingFunction(5,2,"-", calculate);