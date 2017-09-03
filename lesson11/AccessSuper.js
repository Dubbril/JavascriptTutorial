class Animal {
	constructor(name){
		this.name = name;
	}
	set animalName(name){
		this.name = name;
	}
	get animalName(){
		return this.name;
	}
}

class Dog extends Animal {
	constructor(name){
		super(name);
	}
	showName(){
		console.log(this.name);
		console.log(super.name);
		
		// เข้าถึงพรอบเพอตีแอคเซสเซอร์อของคลาสแม่ ผ่านทาง super
		
		super.animalName = "Pit bull dog";
		console.log(super.animalName);
	}
}

let dogObj = new Dog("A dog");
dogObj.showName();



