var obj1 = {}
var obj2 = Object.preventExtensions(obj1);
console.log(obj1 === obj2);

obj1.a = 1

var obj3 = Object.create(obj1);
console.log(obj3);
obj3.a = 1;
console.log(Object.getPrototypeOf(obj3) === obj1);

console.log("=============");
var obj = {};
console.log(Object.isExtensible(obj));

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));