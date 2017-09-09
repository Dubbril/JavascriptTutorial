function * genIterator(){
	let a = yield 1;
	let b = yield a + 3;
	yield b+7;
}

let iterator = genIterator();
console.log(iterator.next());
console.log(iterator.next(2));
//console.log(iterator.throw(new Error(''))); จะเกิด Error

console.log("\n============================");
console.log("try....catch");
console.log("============================\n");

function * genIterator1(){
	let a = yield 1;
	let b;
	
	try{
		b = yield a +3;
	}catch(ex){
		b = 3;
	}
	yield b + 7;
}

let iterator1 = genIterator1();
console.log(iterator1.next());
console.log(iterator1.next(2));
console.log(iterator1.throw(new Error('')));
console.log(iterator1.next());





















