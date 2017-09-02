let obj = {
	x : 1,
	y : 2
};
let clone1 = Object.assign({}, obj);
let clone2 = Object.assign({}, obj);
// สร้างออบเจ็กต์ใหม่ได้เรื่อยๆ ที่เหมือนกับออบเจ็กต้นแบบ obj ทุกประการ

console.log(clone1);
console.log(clone2);
console.log(clone1 === clone2);

console.log("\n============================");
console.log("สามารถรวมออบเจ็กหลายๆตัวเข้าด้วยกัน");
console.log("============================\n");

let obj1 = {x:1};
let obj2 = {y:2};
let obj3 = {z:3};
let merged = Object.assign(obj1,obj2,obj3);

console.log(merged);
console.log(merged === obj1);
console.log(merged === obj2);
console.log(merged === obj3);

console.log("\n============================");
console.log("ถ้ามีชื่อ key ซ้ำกันในออบเจ็กต์จะเลือกอันดับสุดท้ายมา");
console.log("============================\n");

let person1 = {};
let person2 = {
		firstName : "Somchai",
		lastName : "Jaidee"
};
let person3 = {
		lastName : "Dekdee"
};

let person4 = {
		lastName : "Rakdee"
};

Object.assign(person1,person2,person3,person4);
console.log(person1.firstName);
console.log(person1.lastName);


console.log("\n============================");
console.log("สามารถ copy พรอบเพอตีที่เป็น เมธอด,null,undefined หรือแม้แต่ symbol ได้");
console.log("============================\n");

let sym = Symbol("example");
let name = "to do";
let obj4 = {
		myFunction(param){
			console.log(param);
		},
		[`${name}`](){
			console.log("to do something");
		},
		x : null,
		y : undefined,
		[sym] : 100
};

let cloned = Object.assign({},obj4);
cloned.myFunction(200);
cloned[`${name}`]();
console.log(cloned.x);
console.log(cloned.y);
console.log(cloned[sym]);

























