// ฟังชัน
Function.prototype.sayMsg = function(msg) {
	console.log("Function say:", msg);
};
function myFunction() {
}
myFunction.sayMsg("Hello");

// อาร์เรย์
Array.prototype.sayMsg = function(msg) {
	console.log("Array say:", msg);
};
[].sayMsg("Hello")

// ออบเจ็กต์
Object.prototype.sayMsg = function(msg) {
	console.log("Object say:", msg);
};
var obj = {};
obj.sayMsg("Hello");
({}).sayMsg("Hello");

String.prototype.sayMsg = function(msg) {
	console.log("String say:", msg);
};
"123".sayMsg("Hello");

// บูลีน
Boolean.prototype.sayMsg = function(msg) {
	console.log("Boolean say:", msg);
};
true.sayMsg("Hello");

// ตัวเลข
Number.prototype.syaMsg = function(msg) {
	console.log("Number say:", msg);
};
var num = 123;
num.sayMsg("Hello");
(123).sayMsg("Hello");
