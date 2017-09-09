var body1 = "console.log(a*b)";
var body2 = "console.log(a/b)";

var randomNumber = Math.random() >= 0.5; // true or false
var myBody = randomNumber ? body1 : body2;

var myFunction = Function("a","b",myBody);
myFunction(10,5);