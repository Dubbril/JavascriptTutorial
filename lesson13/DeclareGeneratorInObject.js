let obj = {};
obj.genIterator = function * (item){ // ประกาศเจเนอเรเตอร์
	for(let i = 0; i< item.length;i++){
		yield item[i];
	}
};

for(let i of obj.genIterator([1,5,10])){
	console.log(i);
}

console.log("\n============================");
console.log("นำมาเขียนใหม่");
console.log("============================\n");

let obj1 = {
		genIterator: function *(item){ // ประกาศเจเนอเรเตอร์
			for(let i =0;i<item.length;i++){
				yield item[i];
			}
		}
};

console.log("\n============================");
console.log("นำมาเขียนใหม่ ให้สั้นลง");
console.log("============================\n");

let obj2 = {
		*genIterator (item){ // ประกาศเจเนอเรเตอร์
			for(let i =0;i<item.length;i++){
				yield item[i];
			}
		}
};