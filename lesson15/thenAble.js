let thenable = {
		then(resolve,reject){
			console.log("thenable");
			resolve("fulfilled"); // จะส่งค่า fulfilled ไปให้ promise.then()
		}
};

let promise = Promise.resolve(thenable);
promise.then(function(value){
	console.log("then:",value);
});