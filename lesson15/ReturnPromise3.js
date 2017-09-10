let p1 = new Promise(function(resolve,reject){
	console.log("Promise1");
	resolve("Promise1");
});
p1.then(function(value){
	console.log("p1.then:",value);
	let p2 = new Promise(function(resolve,reject){
		console.log("Promise2");
		resolve("Success");
	});
	return p2;
}).then(function(value){
	console.log("p2.then:",value);
});