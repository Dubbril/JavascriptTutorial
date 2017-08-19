var extend = {
	drive : function() {
		console.log("Drive a", this.color, "car");
	}
}

function Car(color) {
	this.color = color;
}

Car.prototype = extend;
Car.prototype.stop = function() {
	console.log("stop a", this.color, "car");
};

var redCar = new Car("red");
console.log(Object.getPrototypeOf(redCar));

redCar.drive();
redCar.stop();

console.log("========================");

function Car1(color) {
}
Car1.prototype.drive = function() {
	console.log("Drive a", this.color, "car");
}

function RedCar(color) {
	this.color = color;
}

RedCar.prototype = Object.create(Car1.prototype);
console.log(Object.getPrototypeOf(RedCar.prototype) === Car1.prototype);

RedCar.prototype.stop = function() {
	console.log("Stop a", this.color, "car");
}

var redCar1 = new RedCar("red");
console.log(Object.getPrototypeOf(redCar1) === RedCar.prototype);
redCar1.drive();
redCar1.stop();
