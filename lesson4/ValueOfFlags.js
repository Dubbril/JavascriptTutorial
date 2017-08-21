var regex = /Hello+/gi;

console.log(regex.lastIndex);
console.log(regex.source);
console.log(regex.global);
console.log(regex.ignorCase);
console.log(regex.multiline);

console.log("==========================");
var myRegex = /Hello+/g;
var str = "01Hello Hellooo89";
var result = myRegex.exec(str);
console.log(result[0]);
console.log(myRegex.lastIndex);

myRegex.exec(str);
console.log(result[0]);
console.log(myRegex.lastIndex);

myRegex.exec(str);
console.log(result[0]);
console.log(myRegex.lastIndex);

console.log("==========================");
var myRegex1 = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
console.log(myRegex1.test("xxxx.yyyyy_zzzz@abc.com"));


console.log("==========================");
var myRegex2 = /^(\-?|\+?)\d*$/;
console.log(myRegex2.test("-987"));














