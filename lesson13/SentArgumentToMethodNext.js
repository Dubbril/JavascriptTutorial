function * genIterator(){
	let a = yield 1;
	let b = yield a + 3;
	yield b+7;
}

let iterator = genIterator();
console.log(iterator.next());
console.log(iterator.next(2));
console.log(iterator.next(3));
console.log(iterator.next(4));
