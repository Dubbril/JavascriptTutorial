let set = new Set();
set.add(1);
set.add("2");
set.add({
	id : 1
});
console.log(set);

console.log("\n============================");
console.log("Set จะไม่เก็บข้อมูลที่ซ้ำกัน");
console.log("============================\n");

let set1 = new Set();
set1.add(1);
set1.add("1");
set1.add(true);
set1.add(true);
set1.add(null);
set1.add(null);
set1.add(undefined);
set1.add(undefined);
set1.add({});
set1.add({});
console.log(set1);
console.log(set1.size);

console.log("\n============================");
console.log("Set เรียกต่อเนื่องกันได้หลายครั้ง");
console.log("============================\n");

let set2 = new Set();
set2.add(1).add(2).add(3);
console.log(set2);
