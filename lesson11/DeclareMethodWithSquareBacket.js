let name1 = "speed";
let name2 = "drive";
let name3 = "stop";
class Car {
	["constructor"](speedValue){ // กลายเป็นเมธอทตัวหนึ่งไม่ใช่ constructor
		this.speedValue = speedValue;
		console.log("Not a constructor: speed =",this.speedValue);
	}
	set [name1](speedValue){ // Method setter
		this.speedValue = speedValue;
	}
	get [name1](){
		return this.speedValue;
	}
	[name2](){
		console.log("Driving speed:",this.speedValue);
	}
	static [name3](){
		console.log("Stop this car");
	}
}

let carObj = new Car(100);
console.log(carObj.speedValue);
carObj.constructor(100);
console.log(carObj.speedValue);
carObj.speed = 60;
console.log(carObj.speed);
carObj.drive();
Car.stop();
