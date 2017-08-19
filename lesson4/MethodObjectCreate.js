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