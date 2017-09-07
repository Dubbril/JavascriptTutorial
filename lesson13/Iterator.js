function createiterator(array){
	let iterator = {
		i : 0,// ทุกครั้งที่เรียกใช้  next() ค่าของ i จะบวกเพิ่มเป็นหนึ่งทุกครั้ง
		next : function(){
			// เมื่อเข้าถึงสมาชิกทุกตัว done จะมีค่าเป็น true
			let done = (this.i >= array.length);
			// เข้าถึงสมาชิกใน array
			let value = !done ? array[this.i++] : undefined;
			return {value,done};
		}
	};
	return iterator;
}

let iterator = createiterator([1,5,10]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());