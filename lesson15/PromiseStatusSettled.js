let promise = Promise.resolve("Promise is fulfilled");

/* ไม่ต้องเขียนแบบนี้ให้เสียเวลา
let promise = new Promise(function(resolve,reject){
	resolve("Promise is fulfilled");
});*/

promise.then(function(value){
	console.log(value);
});