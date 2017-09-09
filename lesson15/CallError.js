let promise = new Promise(function(resolve,reject){
	throw new Error("error1");
});

promise.catch(function(error){
	console.log("catch1:",error.message);
	throw new Error("error2");
}).catch(function(error){
	console.log("catch2:",error.message);
	throw new Error("error3");
}).catch(function(error){
	console.log("catch3:",error.message);
});

console.log("\n============================");
console.log("ถ้าไม่เกิด error อะไรเลย catch จะรีเทิร์นโพรมิสที่มีสถานะ fulfilled");
console.log("============================\n");

let promise2 = new Promise(function(resolve,reject){
	throw new Error("Error");
});

promise2.catch(function(error){
	console.log(error.message);
}).catch(function(){
	console.log("Last error"); // ตัวที่สองจะไม่ถูกเรียกใช้งาน
});


console.log("\n============================");
console.log("เปลี่ยนเป็นเมธอด then() เป็นเมธอดสุดท้าย");
console.log("============================\n");

let promise3 = new Promise(function(resolve,reject){
	throw new Error("Error");
});

promise3.catch(function(error){
	console.log(error.message);
}).then(function(value){
	console.log("Last then");
});





















