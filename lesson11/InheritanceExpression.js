function getClass(){
	let c = class Calculation{
		constructor(a,b){
			this.a = a;
			this.b = b;
		}
		multiply(){
			return this.a * this.b;
		}
	};
	return c; // รีเทิร์นคลาสออกไป
}

class Multiplying extends getClass(){ // สืบทอดคลาสแบบนิพจน์
	constructor(a,b){
		super(a,b);
	}
}

let m = new Multiplying(20,10);
console.log(m.multiply());

console.log("\n============================");
console.log("นำมาเขียนใหม่ได้ดังนี้");
console.log("============================\n");

function Calculation1 (a,b){
	this.a = a;
	this.b = b;
}

Calculation1.prototype.multiply1 = function(){
	return this.a * this.b;
};

class Multiplying1 extends Calculation1{
	constructor(a,b){
		super(a,b);
	}
}

var m1 = new Multiplying1(20,10);
console.log(m1.multiply1());
