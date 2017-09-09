let promise = new Promise(function(resolve,reject){
	resolve("success");
});

promise.then(function(value){
	console.log("then1:",value);
	return 2;
}).then(function(value){
	console.log("then2:",value);
	return 3;
}).then(function(value){
	console.log("then3:",value);
});