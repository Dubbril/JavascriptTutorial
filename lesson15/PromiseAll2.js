let p1 = new Promise(function(resolve,reject){
	resolve("Promise1:");
});

let p2 = new Promise(function(resolve,reject){
	setTimeout(function(){
		reject("Promise2:");
	},1000);
});

let p3 = Promise.reject("Promise3:");

let p4 = Promise.all([p1,p2,p3]); // มอนิเตอร์เฉพาะ p3 เพราะมีสถานะเป็น rejected ก่อนตัวอื่น

p4.then(
		function(value){console.log(value,"success");},
		function(value){console.log(value,"failed");}

);