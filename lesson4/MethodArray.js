var array = [ "a", "b", "c", "d" ];
var str = array.join("->");
console.log(str);

console.log("========================");
var array1 = [];
array1.push("a", "b", "c", "d");
console.log(array1);
console.log(array1.pop());
console.log(array1);

console.log("========================");
var array3 = [ "a", "b", "c", "d" ];
console.log(array3.indexOf("c"));
console.log(array3.indexOf("e"));

console.log("========================");
var array4 = [ "a", "b", "c", "d" ];
var result = array4.some(function matcher(value, index, arrayObj) {
	// values คือค่าสมาชิกของ array
	// index คือค่า index ของอารเรย์
	// arrayObj คือ ["a","b","c","d"];
	return value == "c";
});

console.log(result);

console.log("========================");
var array5 = [ "a", "b", "c", "d" ];
array.forEach(function(value, index, arrayObj) {
	// values คือค่าสมาชิกของ array
	// index คือค่า index ของอารเรย์
	// arrayObj คือ ["a","b","c","d"];
	console.log("a[", index, "] =", value);
});