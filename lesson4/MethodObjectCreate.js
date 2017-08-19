var car = {
	drive : function() {
		console.log("driving a car");
	}
};

var redCar = Object.create(car);
var blueCar = Object.create(car, {
	foo : {
		writable : true,
		configurable : true,
		value : "fooValue"
	},
	bar : {
		writable : true,
		configurable : true,
		value : "barValue"
	}
});

redCar.drive();
blueCar.drive();

console.log(blueCar.foo);
console.log(blueCar.bar);

console.log("=========================");
var car1 = {}
var redCar1 = Object.create(car1);
var blueCar1 = Object.create(car1);

car1.drive = function() {
	console.log("driving a car");
}

redCar1.drive();
blueCar1.drive();
