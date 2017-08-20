// Object
var obj1 = new Object(1234);
var obj2 = new Object();
var obj3 = new Object(undefined);
var obj4 = new Object(null);
var obj5 = Object(1);
console.log(typeof obj5);

console.log("===============");
// Boolean
var obj = new Boolean(true);
console.log(typeof obj);

var b = Boolean(true);
console.log(typeof b);
console.log(b);
console.log(obj == b);
console.log(obj === b);

console.log("===============");
// Number
var objNum = new Number(1);
console.log(typeof objNum);

var n1 = Number("1");
var n2 = Number("a");
console.log(typeof n1, typeof n2);
console.log(n1, n2);
console.log(obj = n1);
console.log(obj === n1);

console.log("===============");
// String

var str1 = new String("MyString");
console.log(typeof str1);

var str2 = String("MyString");
console.log(typeof str2);
console.log(str2 === "MyString");
console.log(str1 == str2);
console.log(str1 === str2);

console.log("===============");
// Array
var array1 = Array(3);
console.log(array1.length);
console.log(array1);

var array2 = new Array(3);
console.log(array2.length);
console.log(array2);
