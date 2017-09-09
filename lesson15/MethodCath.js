let promise = new Promise(function (resolve,reject){
	// เมื่อทำงานไม่สำเร็จ
	console.log("Start a job");
	reject("failed");
});

promise.catch(function (reason){
	console.log("Promise:",reason);
});

console.log("Last statement");

console.log("\n============================");
console.log("ถ้ามี error ก็สามารถใช้เมธอด catch() ดักจับเหตุการณ์ไ้ด");
console.log("============================\n");

let promise1 = new Promise(function(resolve,reject){
	console.log("Start a job");
	throw new Error("Error in promise");
});
promise1.catch(function(error){
	console.log(error.message);
});

console.log("Last statement");


console.log("\n============================");
console.log("เขียนใหม่ได้ดังนี้");
console.log("============================\n");

let promise2 = new Promise(function(resolve,reject){
	try{
		console.log("Start a job");
		throw new Error("Error in promise");
	}catch(error){
		reject(error);
	}
});

promise2.catch(function(error){
	console.log(error.message);
});

console.log("Last statement");





















