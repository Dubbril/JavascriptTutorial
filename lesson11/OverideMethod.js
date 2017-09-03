class Calculation {
	constructor(a,b){
		this.a = a;
		this.b = b;
	}
	multiply(){
		return this.a * this.b;
	}
}

class Multiplying extends Calculation{
	constructor(a,b){
		super(a,b);
	}
	multiply(){ // โอเวอไรด์เมธอท multiply() ของคลาสแม่
		return "The result is "+ super.multiply();
	}
}

let m = new Multiplying(20,10);
console.log(m.multiply());