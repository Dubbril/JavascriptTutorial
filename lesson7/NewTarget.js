
// ไม่สามารถเรียกใช้ function แบบธรรมดาได้ แต่ต้องเรียกด้วยการประกาศแบบ New
function Car(color) {
	if (this instanceof Car) {
//	if (typeof new.target !== "undefined") {
//	if (new.target === Car) {
		this.color = color;
	} else {
		throw new Error("Can't new Car object");
	}
}
let objCar = new Car("Red");
let blueCar = Car.call(objCar, "Blue");
let redCar = Car("Red");