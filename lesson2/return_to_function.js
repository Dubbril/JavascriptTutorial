function say(func) {
	console.log("Say...");
	function sayHi() {
		console.log("Hi");
	}
	return sayHi;
}

var hi = say();
hi();