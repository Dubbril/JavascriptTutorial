let car = {
		drive(){
			console.log("Drive a car");
		}
};
let taxi = {
		drive(){
			console.log("Drive a taxi");
		}
};

let driver = Object.create(car);
console.log(Object.getPrototypeOf(driver)===car);
driver.drive();

Object.setPrototypeOf(driver,taxi);
console.log(Object.getPrototypeOf(driver) === taxi);
driver.drive();

console.log("\n============================");
console.log("__proto__");
console.log("============================\n");

let driver1 = {
	__proto__ : car	
}
console.log(driver1.__proto__ === car);
driver1.drive();

driver1.__proto__ = taxi;
console.log(driver1.__proto__ === taxi); // เปลี่ยนโปรโตไทป์เป็น Taxi
driver1.drive();


















