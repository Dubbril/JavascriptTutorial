var function1 = "function myFunction (a,b){console.log(a*b);}";
var function2 = "function myFunction (a,b){console.log(a/b);}";

var randomNumber = Math.random() >= 0.5; //true or false
var code = randomNumber ? function1 : function2;

eval(code);
myFunction(10,5); // 50 หรือ  2