function foo(a) {
	return a;
}
function bar(b) {
	let c = b + 100;
	return foo(c);
}

console.log(bar(30));