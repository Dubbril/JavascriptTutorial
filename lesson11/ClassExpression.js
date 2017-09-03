let Car = class { // Class ไร้ชื่่อ
	// สมาชิกคลาส
};

console.log(typeof Car);

let carObj = new Car();
console.log(typeof carObj);
console.log(carObj instanceof Car);

console.log("\n============================");
console.log("การใช้นิพจน์คลาส เพื่อเป็นอาร์กิวเมนต์ส่งไปให้ฟังก์ชัน");
console.log("============================\n");

function myFunction(classExpr){
	let c = new classExpr();
	c.drive(100);
}

myFunction(class {
	drive(speed){
		console.log("Driving speed:",speed);
	}
});

console.log("\n============================");
console.log("การใช้คลาสเป็นค่ารีเทิร์นของฟังก์ชัน");
console.log("============================\n");

function myFunction2(){
	return class{
		drive(speed){
			console.log("Driving speed:",speed);
		}
	}
}

let Car_2 = myFunction2();
let carObj2 = new Car_2();
carObj2.drive(100);



























