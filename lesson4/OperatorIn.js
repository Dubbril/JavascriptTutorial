var obj = {
	x : 1,
	y : 2
};
console.log("x" in obj);
console.log("xyz" in obj);

var a = [ "a", "b", "c" ];
console.log(0 in a);
console.log(5 in a);
console.log("1" in a);
console.log("length" in a);

console.log("===============");
var parent = {x:1};
var obj1 = Object.create(parent);
console.log("x" in obj1);