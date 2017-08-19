var obj = {
	x : 1,
	y : 2
};
console.log(delete obj.x);
console.log(delete obj["y"]);
console.log(obj);
var a = 1;
console.log(delete a);

console.log("================");

var a = [ 1, "Hi" ];
console.log(a.length);
console.log(delete a[0]);
console.log(delete a[1]);
console.log(a[0]);
console.log(a[1]);
console.log(a.length);