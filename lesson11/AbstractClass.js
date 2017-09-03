class Calculation {
	constructor(){
		if(new.target === Calculation){
			throw new Error("Abstract class cannot be instanceiated.");
		}
	}
	execute(){
		// ไม่มีซอร์สโค้ด ต้องให้คลาสอื่นมา extends เพื่อไปใช้งานอย่างย่อ
	}
}
//new Calculation();  // เกิด Error เพราะไม่สามารถสร้างออบเจ็กจากการใช้ New ได้

console.log("\n============================");
console.log("เมื่อคลาสลูกนำไปใช้");
console.log("============================\n");

class Multiplying extends Calculation {
	constructor(a,b){
		super();
		this.a = a;
		this.b = b;
	}
	execute(){
		return this.a * this.b;
	}
}

var m = new Multiplying(2,2);
console.log(m.execute());