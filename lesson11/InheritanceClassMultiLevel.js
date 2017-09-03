class Animal{
	constructor(name){
		this.name = name;
		console.log("Animal constructor");
	}
	showName(){
		console.log("Animal is",this.name);
	}
	static sleep(){
		console.log("This animal is sleeping");
	}
}
class Quadruped extends Animal{
	constructor(name){
		super(name);
		console.log("Quadruped constractor");
	}
	showColor(){
		console.log(this.name,"is red");
	}
}
class Dog extends Quadruped {
	constructor(name){
		super(name);
		console.log("Dog constructor");
	}
	run(){
		console.log("Dog constructor");
	}
}

let dogObj = new Dog("Pit bull");

console.log(dogObj instanceof Dog);
console.log(dogObj instanceof Quadruped);
console.log(dogObj instanceof Animal);
console.log(dogObj instanceof Object);
dogObj.showName();
dogObj.showColor();
dogObj.run();
Dog.sleep();
console.log(typeof dogObj.sleep);

