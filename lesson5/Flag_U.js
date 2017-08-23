var str = "𤭢";
console.log(str.length);
console.log(/^.$/.test(str));

console.log("===========");
var str1 = "𤭢";
console.log(/^.$/u.test(str));

console.log("===========");
var result1 = "𤭢กขคง𤭢".match(/[\s\S]/gu);
console.log(result1.length);

var result2 = "𤭢กขคง𤭢".match(/[\s\S]/g);
console.log(result2.length);