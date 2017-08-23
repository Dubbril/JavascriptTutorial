var myRegex = /foo/g;
var regex2 = new RegExp(myRegex);

console.log(regex2.test("foo"));
console.log(myRegex === regex2);

console.log("===============================");

var myRegex1 = /foo/i;
var regex3 = new RegExp(myRegex1, "g");

console.log(myRegex1.test("FOO"));
console.log(regex3.test("FOO"));

console.log("===============================");
var myRegex4 = new RegExp("foo","y");
console.log(myRegex4.exec("foo_abc"));