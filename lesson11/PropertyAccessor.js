class Car{
	constructor(){
		this.speedValue = 100;
	}
	get speed(){
		return this.speedValue;
	}
	set speed(speedValue){
		this.speedValue = speedValue;
	}
}

let carObj = new Car(100);
console.log(carObj.speed);
carObj.speed  = 60;
console.log(carObj.speed);
console.log(carObj.speedValue);


console.log("\n============================");
console.log("Property Accessor");
console.log("============================\n");

let desc = Object.getOwnPropertyDescriptor(Car.prototype,"speed");
console.log("get" in desc);
console.log("set" in desc);
console.log(desc.enumerable);

