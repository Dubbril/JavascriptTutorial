try {
	console.log(x);
	x++;
} catch (e) {
	console.log(typeof e);
	console.log(e.message);
	console.log(e.name);
}

console.log("===========================");

try {
	throw 42;
	console.log(42); // ส่วนนี้จะไม่ทำงาน
} catch (e) {
	console.log(e);
}

console.log("Last Statement");

console.log("===========================");

try {
	console.log(x);
} catch (e) {
	console.log(e.message);
} finally {
	console.log("finally");
}
console.log("Last Statement");

console.log("===========================");

function foo() {
	try {
		return "foo";
	} finally {
		console.log("finally");
	}
}
console.log(foo());
