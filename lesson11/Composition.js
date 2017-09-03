class Calculation {
	constructor (a,b){
		this.a = a;
		this.b = b;
	}
	execute(){
		return this.a * this.b;
	}
}
class Multiplying {
	constructor(calcObj){
		if(calcObj instanceof Calculation){
			this.calcObj = calcObj; // อ้างถึงออบเจ็กต์ที่เป็นอินสแตนซ์ของ
									// Calculation
		}
	}
	multiply(){
		return "This value is "+this.calcObj.execute();
	}
}

let c1 = new Calculation(10,10);
let m1 = new Multiplying(c1);
console.log(m1.multiply());

let c2 = new Calculation(20,20);
let m2 = new Multiplying(c2);
console.log(m2.multiply());
