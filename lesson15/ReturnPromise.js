let p1 = new Promise(function(resolve,reject){
	resolve("promise1");
});

let p2 = new Promise(function(resolve,reject){
	resolve("promise2");
});

let p3 = p1.then(function(value){
	console.log("First then:",value);
	return p2;
});

p3.then(function(value){
	console.log("Second then:",value);
});

console.log("\n============================");
console.log("นำมาเขียนใหม่");
console.log("============================\n");

let pr1 = new Promise(function(resolve,reject){
	resolve("promise1");
});

let pr2 = new Promise(function(resolve,reject){
	resolve("promise2");
});

pr1.then(function(value){
	console.log("First then:",value);
	return pr2;
}).then(function(value){
	console.log("Second then:",value);
});

























