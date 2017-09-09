function * genIterator(){
	// ซอร์สโค้ด
	yield 1;
	// ซอร์สโค้ด
	yield 5;
	// ซอร์สโค้ด
	yield 10;
}

let iterator = genIterator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log("\n============================");
console.log("ตัวอย่างการใช้ Generator");
console.log("============================\n");

function * genIterator1(array){
	for(let i = 0; i<array.length;i++){
		// ซอร์สโค้ดก่อนหน้า
		yield array[i]; // เมื่อประโยคที่ทำงานเสร็จ ก็จะหยุดรอการเรียก iteartor.next() ครั้งต่อไป
		// ซอร์สโค้ดตามหลัง
	}
}

let iterator1 = genIterator1([1,5,10]);
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());




















