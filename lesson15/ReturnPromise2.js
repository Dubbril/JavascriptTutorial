let p1 = new Promise(function(resolve,reject){
	resolve("success");
});
let p2 = new Promise(function(resolve,reject){
	reject("failed");
});

p1.then(function(value){
	console.log("then:",value);
	return p2;
}).catch(function(value){
	console.log("catch:",value);
});