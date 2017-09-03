class Car {
	constractor(speed){
		this.speed = speed;
	}
	drive(){
		console.log("Driving speed:",this.speed);
	}
}

let carObj = new Car(100);
carObj.drive();

console.log(typeof carObj);
console.log(carObj instanceof Car);
console.log(carObj instanceof Object);

console.log(typeof Car.prototype.drive);
console.log(carObj.drive === Car.prototype.drive);

// คลาส Car ก็คือฟังก์ชันคอนสตรัคเตอร์ที่ชื่อ Car
console.log(typeof Car);
console.log(Car.name);
console.log(Car === Car.prototype.constructor);
console.log(Car.prototype.constructor.name);