let car = {
		speed : 100,
		drive(){
			return "Car speed ";
		}
};

let driver = {
		__proto__:car,
		drive(){
			return super.drive() + super.speed; // เรียกใช้งาน super
			
			// อาจเรียกวิธีนี้ก็ได้
			// return Object.getPrototypeOf(this).drive.call(this) + this.__proto__.speed;
			// return this.__proto__.drive.call(this)+this.__proto__.speed;
		}
};
console.log(driver.speed);
console.log(driver.drive());

console.log("\n============================");
console.log("เรียกใช้ super จากวงเล็บเหลี่ยม");
console.log("============================\n");

let car2 = {
		["car speed"] : 100,
		["drive a car"](){
			return "Car speed";
		}
};
let driver2 = {
		__proto__ : car2,
		speed: 900,
		drive(){
			return super["drive a car"]()+super["car speed"]; // เรียกใช้งาน  super
		}
};

console.log(driver2.speed);
console.log(driver2.drive());

console.log("\n============================");
console.log("เรียกใช้ในกรณีที่สืบทอดหลายระดับ");
console.log("============================\n");

let car3 = {
		drive(){
			return "is driving";
		}
};
let taxi3 = {
		__proto__ : car3,
		drive(){
			return super.drive()+" a taxi";
		}
};

let driver3 = {
		__proto__ :taxi3,
		drive(){
			return "Someone "+super.drive();
		}
};

console.log(driver3.drive());

// super ไม่สามารถเรียกนอก ออบเจ็กได้ เพราะจะทำให้เกิด error ได้















