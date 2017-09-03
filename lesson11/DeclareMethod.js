class Car {
	constructor(speed){
		this.speed = speed;
	}
	drive(){
		console.log("Driving speed:",this.speed);
	}
	stop(){
		console.log("Stop a car");
	}
}

let carObj = new Car(100);
carObj.drive();
carObj.stop();

// หากภายใน Method ซ้ำกัน จะเลือก Method ตัวล่าสุดเท่านั้น