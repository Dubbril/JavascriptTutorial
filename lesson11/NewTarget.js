class Calculation {
	constructor(){
		console.log(new.target === Calculation);
		console.log(new.target);
		
		// คลาสก็คือฟังก์ชัน
		console.log(Calculation);
	}
}
new Calculation();


console.log("\n============================");
console.log("ถ้าเปลี่ยนไปใช้กับคลาสลูกก็จะให้ผลอีกแบบ");
console.log("============================\n");

class Calculation1 {
	constructor(){
		// ถ้าคลาสลูกเรียกคนสตรัคเตอร์ของแม่ ค่าของ new.target จะมีค่าเท่ากับ undefined
		console.log("new.target in Calculation:",new.target === Calculation1);
	}
}
class Multiplying extends Calculation1 {
	constructor(){
		super();
		console.log("new.target in Multiplying:",new.target === Multiplying);
	}
}
new Multiplying();