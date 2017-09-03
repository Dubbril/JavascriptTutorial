class Calculation {
	constructor(a,b){
		if(new.target === Calculation){
			throw new Error("Abstract class cannot be instantiated.");
		}
		this.a = a;
		this.b = b;
	}
	execute(){}; // เมธอทเปล่าๆ ยังไม่มีการทำงานอะไร
}

class Mulitplying extends Calculation {
	constructor(a,b){
		super(a,b);
	}
	execute(){
		return this.a * this.b;
	}
}

class Division extends Calculation {
	constructor(a,b){
		super(a,b);
	}
	execute(){
		return this.a / this.b;
	}
}

class Substraction extends Calculation {
	constructor(a,b){
		super(a,b);
	}
	execute(){
		return this.a - this.b;
	}
}
function math(calcObj){
	if(calcObj instanceof Calculation){
		console.log(calcObj.execute()); // ผลการทำงานจะขึ้นอยู่กับออบเจ็กต์ที่ส่งเข้ามา
										// ว่าเป็นอะไร
	}
}
math(new Mulitplying(20,1));
math(new Division(20, 10));
math(new Substraction(20, 10));



