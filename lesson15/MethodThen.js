function asynCode(resolve, reject) {
	setTimeout(function() {
		// source code
		resolve("success");
	}, 1000);

};

let promise = new Promise(asynCode);
promise.then(function(value) {
	console.log("Promise:", value);
});

console.log("Last statement");

console.log("\n============================");
console.log("ดักจับ 2 กรณี");
console.log("============================\n");

let asynCode1 = function (resolve,reject){
	console.log("Start a job");
	
	let condition;
	// source code
	if(condition){
		resolve("success");
	}else{
		reject("failed");
	}
};

let promise1 = new Promise(asynCode1);
promise1.then(function(value){
	console.log("Promise:",value);
},function(reason){
	console.log("Promise:",reason);
});

console.log("Last statement");


























