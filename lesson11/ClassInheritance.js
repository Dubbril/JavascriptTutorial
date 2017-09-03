class Calculation {
	constructor (a,b){
		this.a = a;
		this.b = b;
	}
	multiply(){
		return this.a * this.b;
	}
}
class Division extends Calculation{ // Division สืบทอดมาจาก Calculation
	constructor(a,b){
		super(a,b); // เรียกใช้คอนสตรัคเตอร์ของ Calculation
		
		// สามารถกำหนดค่าให้กับ this.a และ this.b ที่คลาสแม่ได้โดยตรง
		// แต่การทำเช่นนั้นจะไม่ปลอดภัย
		// this.a = a; ไม่ควรทำ
		// this.b = b; ไม่ควรทำ
	}
	divide(){
		return this.a / this.b;
	}
}

let div = new Division(20,10);
console.log(div.multiply());
console.log(div.divide());
console.log(div.a,div.b);

console.log(div instanceof Division);
console.log(div instanceof Calculation);
console.log(div instanceof Object);

// เบื้องหลังจะมีการทำ Prototype chain
console.log(Object.getPrototypeOf(div) === Division.prototype);
console.log(Object.getPrototypeOf(Division.prototype) == Calculation.prototype);
