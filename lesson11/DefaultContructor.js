class Calculation {
	constructor(a,b){
		this.a = a;
		this.b = b;
		console.log("Calculation:",a,b);
	}
}

class Division extends Calculation{
	// ไม่มีคอนสตรัคเตอร์
	// แต่จาวาสคริปต์ จะสร้างคอนสตรัคเตอร์ที่เป็นดีฟอลต์มาหให้
}

let div = new Division(100,200); 

// จะเสมือนมีคอนสตรัคเตอร์ที่เป็นค่าดีฟอลต์มาให้ดังนี้
/*class Division extends Calculation {
	constructor(...args){
		super(...args);
	}
}*/