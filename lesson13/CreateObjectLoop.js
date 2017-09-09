let obj = {array:[1,5,10]};
obj[Symbol.iterator] = function(){
	return this.array[Symbol.iterator]();
	// this.array.values();
};

for(let i of obj){
	console.log(i);
}

console.log("\n============================");
console.log("แก้ไขใหม่");
console.log("============================\n");

let obj1 = {
		array:[1,5,10],
		[Symbol.iterator](){
			return this.array[Symbol.iterator]();
			// this.array.values();
		}
};

for(let i of obj1){
	console.log(i);
}


console.log("\n============================");
console.log("ประกาศแบบคลาส");
console.log("============================\n");

class Interable{
	constructor(array){
		this.array = array;
	}
	[Symbol.iterator](){
		return this.array[Symbol.iterator]();
		// this.array.values();
	}
}

let obj2 = new Interable([1,5,10]);
for(let i of obj2){
	console.log(i);
}

console.log("\n============================");
console.log("การเข้าถึงเมธอดของ Object");
console.log("============================\n");

String.prototype[Symbol.iterator] = function(){
	let item = this;
	let iterator = {
			i : 0, // ทุครั้งที่เรียกใช้ next() ค่าของ i จะบวเพิ่มเป็นหนึ่งทุกครั้ง
			next(){
				// เมื่อเข้าถึงสมาชิกในอาร์เรย์ครบทุกตัว done จะมีค่าเป็น true
				let done = (this.i >= item.length);
				
				// เปลี่ยนเป็นตัวอักษรตัวใหญ่
				let value = !done ? item[this.i++].toUpperCase() : undefined;
				return {value,done};
			}
	};
	return iterator;
}
for(let i of "abc"){
	console.log(i);
}
