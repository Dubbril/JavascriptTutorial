let promise = Promise.reject("Promise is rejected");
/* ไม่ต้องเขียนแบบนี้ให้เสียเวลา
let promise = new Promise(function(resolve,reject){
	reject("Promise is rejected");
});*/

promise.catch(function(reason){
	console.log(reason);
});