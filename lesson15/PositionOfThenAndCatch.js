let promise = new Promise(function(resolve,reject){
	// resolve("success");
	// resolve("failed");
});

console.log("Line 1");

console.log("Line 2000");

promise.catch(function(reason){
	console.log("Promise:",reason);
});

console.log("Line 5000");

promise.then(function(value){
	console.log("Promise:",value);
});

console.log("\n============================");
console.log("เมธอด then() วางอยู่ซ้อน then()");
console.log("============================\n");

let promise1 = new Promise(function(resolve,reject){
	console.log("Start a job");
	resolve("success");
});

promise1.then(function(value){
	console.log("Outer Promise:",value);
	
	promise1.then(function(value){
		console.log("Inner Promise:",value);
	});
});

console.log("Last statement");

console.log("\n============================");
console.log("เมธอด catch() วางอยู่ซ้อน catch()");
console.log("============================\n");

let promise2 = new Promise(function(resolve,reject){
	console.log("Start a job");
	reject("failed");
});

promise2.catch(function(reason){
	console.log("Outer promise:",reason);
	promise2.catch(function(reason){
		console.log("Inner promise:",reason);
	});
});

console.log("Last statement");





























