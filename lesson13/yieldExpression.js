function * g(){
	yield 2;
	yield 3;
}
function * genIterator(){
	yield 1;
	yield* g();
	yield "45";
	yield* Array.from(arguments);
	let item = new Set([8,9]);
	yield* item.values();
}

let iterator = genIterator(6,7);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
