let promise = new Promise(function(resolve,reject){
	resolve("success");
});

promise.then(function(value){
	console.log("Promise:",value);
}).then(function(){
	console.log("then1: finish");
}).then(function(){
	console.log("then2: finish");
});