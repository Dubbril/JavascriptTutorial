let MultiplyingObj = {
		multiply(){
			return this.a * this.b;
		}
};
let DivisionObj = {
		drive(){
			return this.a / this.b;
		}
};

function getClass(...args){
	let merged = function(){};
	// เมธอทของ MultiplyingObj กับ DivisionObj จะมารวมอยู่ที่ merged.prototype
	Object.assign(merged.prototype, ...args); 
	return merged;// return merged ซึ่งทำหน้าที่เป็นฟังก์ชันคอนสตรัคเตอร์
}

class MyCalc extends getClass(MultiplyingObj,DivisionObj){
	// สืบทอดมาจาก MultiplyingObj กับ DivisionObj
	constructor(a,b){
		super();
		// ไม่สามารถเรียก super(a,b);
		this.a = a;
		this.b = b;
	}
}

let calc = new MyCalc(20,10);
console.log(calc.multiply());
console.log(calc.drive());