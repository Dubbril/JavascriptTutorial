let obj = {item:[1,5,10]};
obj[Symbol.iterator] = function *(){ // ประกาศเจเนอเรเตอร์
	yield *this.item;
};

for(let i of obj){
	console.log(i);
}

console.log("\n============================");
console.log("ประกาศเจเนอเรเตอร์ไว้ใน Object");
console.log("============================\n");

let obj1 = {
		item:[1,5,10],
		[Symbol.iterator] : function *(){
			yield *this.item;
		}
};


console.log("\n============================");
console.log("ประกาศเจเนอเรเตอร์ไว้ใน Object แบบย่อ");
console.log("============================\n");

let obj2 = {
		item:[1,5,10],
		*[Symbol.iterator](){
			yield *this.item;
		}
};

console.log("\n============================");
console.log("ประกาศเจเนอเรเตอร์ไว้ใน Class");
console.log("============================\n");

class GenIterator{
	constructor(item){
		this.item = item;
	}
	*[Symbol.iterator](){
		yield *this.item;
	}
}

let obj3 = new GenIterator([1,5,10]);
for(let i of obj3){
	console.log(i);
}




















