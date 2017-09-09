let promise = new Promise(function(resolve,reject){
	reject("Promise");
});
promise.then(function(value){
	console.log(value,"success"); // ไม่ถูกเรียกใช้งาน
}).catch(function(reason){
	console.log(reason,"failed");
});


console.log("\n============================");
console.log("แก้ไขใหม่");
console.log("============================\n");

let promise1 = new Promise(function(resolve,reject){
	resolve("Promise:");
});
promise1.catch(function(value){
	console.log(value,"failed"); // ไม่ถูกเรียกให้ทำงาน
}).then(function(reason){
	console.log(reason,"success");
});


let promise2 =  new Promise(function(resolve,reject){
	throw new Error("Error");
});
promise2.catch(function(error){
	console.log(error.message);
	return 1; // สามารถส่ง 1 ไปให้ฟังก์ชันคอลแบ็คของ then() ตัวถัดไปได้
}).then(function(value){
	console.log("then:",value);
	return 2; // ไม่สามารถส่ง 2 ไปให้ฟังก์ชันคอลแบ็คของ catch() ตัวถัดไปได้
}).catch(function(error){
	console.log("catch:",error);
});


console.log("\n============================");
console.log("แก้ไขใหม่เพิ่ม throw");
console.log("============================\n");

let promise4 = new Promise(function(resolve,reject){
	throw new Error("Error");
});
promise4.catch(function(error){
	console.log(error.message);
	return 1;
}).then(function(value){
	console.log("then:",value);
	throw 2;
}).catch(function(value){
	console.log("catch:",value);
});


























