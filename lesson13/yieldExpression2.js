function * f(){
	yield 1;
	return 2;
}

function * g(count){
	for(let i = 0;i<2;i++){
		yield count +i;
	}
}

function * genIterator(){
	let result = yield *f();
	yield result+10;
	yield *g(result);
}

let iterator = genIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
