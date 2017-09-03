class Calculation {
	constructor(a,b){
		this.a = a;
		this.b = b;
	}
	multiply(){
		return this.a * this.b;
	}
}
let name = "multiply";
class Multiplying extends Calculation{
	constructor(a,b){
		super(a,b);
	}
	[name](){
		return "The result is " + super.multiply();
		// หรือจะเขียนเป็น return "The result is "+ super[name]();
	}
}

let m = new Multiplying(20,10);
console.log(m[name]());
console.log(m.multiply());