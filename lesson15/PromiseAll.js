let p1 = Promise.resolve("Promise1");
let p2 = Promise.resolve("Promise2");
let p3 = Promise.resolve("Promise3");

let p4 = Promise.all([p1,p2,p3]); // มอนิเตอร์ p1,p2,p3 ที่มีสถานะเป็น fulfilled ทุกตัว

p4.then(function(value){
	console.log(value);
});