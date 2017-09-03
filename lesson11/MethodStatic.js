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