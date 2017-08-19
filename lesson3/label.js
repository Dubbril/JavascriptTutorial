outer: for (var i = 0; i < 2; i++) {
	console.log("i : ", i);

	for (var j = 0; j < 3; j++) {
		if (j == 1) {
			continue outer;
		}
		console.log("j : ", j);
	}

}

console.log("==================");

outer: while (true) {
	for (var i = 0; i < 3; i++) {
		if (i == 1) {
			break outer;
		}
		console.log("i : ", i)
	}
}

console.log("==================");

//var condition = true;
var condition = false;
var value = condition ? "foo" : "bar";
console.log(value);
