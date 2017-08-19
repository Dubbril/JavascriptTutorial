function Car(color) {
	this.color = color;
	return true;
}

var redCar = new Car("red");
var blueCar = new Car("blue");

console.log(redCar.color);
console.log(blueCar.color);

console.log("================");

function Car1(color) {
	this.color = color;
	return true;
}

var blueCar = Car1("blue");
console.log(blueCar);

console.log("================");

function Car3(Color) {
	console.log("constructor");
}
var redCar = new Car3();
var blueCar = new Car3;