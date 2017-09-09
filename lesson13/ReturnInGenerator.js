function * genIterator(){
	yield 1;
	yield 5;
	return 45; // จบการทำงานแค่บรรทัดนี้
	yield 10; // การทำงานจะไม่มาถึงบรรทัดนี้
}

let iterator = genIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
