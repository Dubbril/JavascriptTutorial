let promise = new Promise(function (resolve,reject){
	console.log(typeof resolve);
	console.log(typeof reject);
	console.log("Promise");
});

console.log("Last statement");