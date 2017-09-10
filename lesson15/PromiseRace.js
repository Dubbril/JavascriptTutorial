let p1 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve("Promise1:");
	},500); // ดีเลย์  0.5 วินาที
});

let p2 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve("Promise2:");
	},1000); // ดีเลย์ 1 วินาที
});

let p3 = Promise.reject("Promise3:");

let p4 = Promise.race([p1,p2,p3]); // มอนิเตอร์เฉพาะพรอมิส p3 เพราะมีสถานะเป็น settled ก่อนตัวแรก

p4.then(
		function(value){console.log(value,"success");},
		function(value){console.log(value,"failed");}
);