var str = "foo1_foo2_foo3";

var regex = /foo\d_?/;
var regexG = /foo\d_?/g;
var regexY = /foo\d_?/y;

var result = regex.exec(str);
var resultG = regexG.exec(str);
var resultY = regexY.exec(str);

console.log(result[0]);
console.log(resultG[0]);
console.log(resultY[0]);

console.log(regex.lastIndex);
console.log(regexG.lastIndex);
console.log(regexY.lastIndex);

console.log("=============================");

resultG = regexG.exec(str);
resultY = regexY.exec(str);

console.log(resultG[0]);
console.log(resultY[0]);

console.log(regexG.lastIndex);
console.log(regexY.lastIndex)

console.log("=============================");

var regex = /foo\d_?/;
var regexG = /foo\d_?/g;
var regexY = /foo\d_?/y;

regex.lastIndex = 1;
regexG.lastIndex = 1;
regexY.lastIndex = 1;

var result = regex.exec(str);
var resultG = regexG.exec(str);
var resultY = regexY.exec(str);

console.log(result[0]);
console.log(resultG[0]);
//console.log(resultY[0]);

console.log("=============================");
var myRegex = /foo+/y;
console.log(myRegex.sticky);
myRegex.sticky = 1;

