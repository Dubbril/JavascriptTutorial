let sym = Symbol("first symbol");
let obj = {[sym] : 100};
console.log(obj[sym]);
obj[sym] = 200;
console.log(obj[sym]);

let lastSym = Symbol("last symbol");
Object.defineProperties(obj,{
	[lastSym] : { // ใช้ซิมโบลเป็นชื่อคีย์ในออบเจ็กต์
		value : 300,
		writable: true
	}
});
console.log(obj[lastSym]);

object.defineProperties(obj,sym,{writable: false}); // กำหนดให้พร็อพเพอตี้ ไม่สามมรถแก้ไขค่าได้
obj[sym] = 1; // จะเกิด error เพราไม่สามารถแก้ไขค่าได้