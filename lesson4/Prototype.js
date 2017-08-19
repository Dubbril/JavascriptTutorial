var color;

function Car(calor) {
	this.color = color;
}

var redCar = new Car("red");
console.log(Object.getPrototypeOf(redCar) === Car.prototype);

console.log("==============");

function Car1(color) {
	this.color = color;
}
Car1.prototype.drive = function() {
	console.log("Drive a", this.color, "car");
};

var redCar1 = new Car1("red");
redCar1.drive();
var blueCar1 = new Car1("blue");
blueCar1.drive();
console.log(Object.getPrototypeOf(redCar1) === Car1.prototype);
console.log(Object.getPrototypeOf(blueCar1) === Car1.prototype);

console.log("==============");

function Car3(color) {
	this.color = color;
}
Car3.drive = function() {
	console.log("driving a car");
};
Car3.drive();

var redCar3 = new Car3("red");
console.log(typeof redCar3.drive());
