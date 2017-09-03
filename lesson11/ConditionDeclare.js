class Car {
	constructor(speed)
	{
		this.speed = speed;
	}
	drive(){
		// ซอร์สโค้ด
	}
}

let car = new Car(100);
for(let c in car){
	console.log(c); // จะแสดงชื่อ key ของ Object ออกมา นั่นคือ speed;
}

