class Car{
	constructor(speed){
		this.speed = speed;
	}
	drive(){
		console.log("Driving speed:",this.speed);
	}
	static stop(){
		console.log("Stop this car");
	}
}

// เมธอทสแตติก
Car.stop();

let carObj = new Car(100);
carObj.drive();
console.log(typeof carObj.stop); // undefined จะต้องเรียกผ่านชื่อคลาสโดยตรง


console.log("\n============================");
console.log("สามารถนำมาวางหน้า getter setter ได้");
console.log("============================\n");

class Car2 {
	static set color(value){
		this.value = value;
	}
	static get color(){
		return this.value;
	}
}

Car2.color = "red";
console.log(Car2.color);
console.log(Car2.value);

let carObj2 = new Car2();
console.log(typeof carObj.color);

console.log("\n============================");
console.log("this ในเมธอดสแตติก และ คอนสตรัคเตอร์ และ เมธอทธรรมด");
console.log("============================\n");

class Car3 {
	constructor(speed){
		this.speed = speed; // this.speed เป็นของออบเจ็กต์
	}
	drive(){
		console.log("Drive speed:",this.speed);
	}
	static set color(value){
		this.value = value; // this.value เป็นของคลาส
	}
}

let carObj3 = new Car3(100);
console.log(carObj3.value);
console.log(carObj3.speed);
carObj3.drive();

Car3.color = "red";
console.log(Car3.value);
console.log(Car3.speed);

