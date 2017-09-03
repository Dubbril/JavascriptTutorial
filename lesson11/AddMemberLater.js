class Car {
	constructor(speed){
		this.speed = speed;
	}
}

Car.prototype.drive = function(){ // เพิม Method เข้าไปภายหลัง
	console.log("Driving  speed:",this.speed);
};

let car = new Car(100);
car.drive();

for(let c in car){
	console.log(c);
}

console.log("\n============================");
console.log("นำมาเขียนใหม่ได้ดังนี้");
console.log("============================\n");

class Car2 {
	constructor(speed){
		this.speed = speed;
	}
}
Object.defineProperty(Car2.prototype,"drive",{
	value:function(){
		console.log("Driving speed:",this.speed);
	},
	enumerable:false,
	writable: true,
	configurable: true
});

let car2 = new Car2(100);
car2.drive();
for(let c in car2){
	console.log(c);
}




















