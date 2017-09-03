class ArrayExt extends Array {
	get(index){
		return this[index];
	}
}

let array = new ArrayExt();
array[0] = 1;
array[1] = 2;
console.log(array.get(0));
console.log(array.get(1));

console.log("\n============================");
console.log("เขียนแบบสืบทอดจาก สแตติก");
console.log("============================\n");

class ArrayExt1 extends Array {
	constructor(length){
		super(length);
	}
}

let a1  = ArrayExt1.of("one","two","three");
console.log(a1 instanceof ArrayExt1);
console.log(a1 instanceof ArrayExt1);
console.log(a1.length);

let a2 = ArrayExt1.from(["one","two","three"]);
console.log(a2 instanceof ArrayExt1);
console.log(a2 instanceof Array);
console.log(a2.length);

