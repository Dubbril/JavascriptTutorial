let person = {
		set firstName(param){
			this.fname = param;
		},
		get firstName(){
			return this.fname;
		}
};

person.firstName = "Somchai";
let target = Object.assign({},person);

let descriptor = Object.getOwnPropertyDescriptor(target,"firstName");
console.log(descriptor.value);
console.log(typeof descriptor.set);
console.log(typeof descriptor.get);
console.log(target.firstName);

console.log("\n============================");
console.log("ไม่สามารถ Copy writable enumerable");
console.log("============================\n");

let font = {};
Object.defineProperties(font,{
	color:{
		value : "red",
		writable: false // ไม่สามารถก๊อปปี้ได้
	},
	size: {
		value : 200,
		enumerate: false // ไม่สามารถก๊อปปี้ได้
	}
});

let obj = Object.assign({},font);
console.log(typeof obj.color);
console.log(typeof obj.size);

console.log("\n============================");
console.log("ไม่สามารถ Copy writable enumerable");
console.log("============================\n");

console.log("\n============================");
console.log("ไม่สามารถ Copy พรอบเพอตี้ที่สืบทอดมาจากโปรโตไทป์ได้");
console.log("============================\n");

let car = {
		drive(){
			console.log("Drive a car");
		}
};

let taxi = Object.assign(car);
taxi.drive();
let driver = Object.assign({},taxi);
console.log(typeof driver.drive);












