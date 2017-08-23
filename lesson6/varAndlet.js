for (var i = 0; i < 10; i++) {

}
console.log(i);

console.log("==================");
for (let j = 0; j < 10; j++) {

}
// console.log(j)

console.log("==================");
var array = [];
for (var x = 0; x < 5; x++) {
	array.push(function() {
		console.log(x);
	});
}
array.forEach(function(printLog) {
	printLog();
});

console.log("==================");
var array1 = [];
for (var y = 0; y < 5; y++) {
	array1.push(function(item) {
		return function() {
			console.log(item);
		};
	}(y));
}
array1.forEach(function(printLog1) {
	printLog1();
});

console.log("==================");
var array2 = [];
for (let z = 0; z < 5; z++) {
	array2.push(function() {
		console.log(z);
	});
}
array2.forEach(function(printLog3) {
	printLog3();
})

console.log("==================");
// console.log(count);
let count = 89;
if (true) {
	console.log(count);
}

console.log("==================");
var count1 = 89;
if (true) {
	let count1 = 12;
	console.log(count1);
}
console.log(count1);
