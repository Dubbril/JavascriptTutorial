let set1 = new Set([ "a", "b", "c" ]);
console.log(set1);

let set2 = new Set("def");
console.log(set2);

console.log("\n============================");
console.log("สร้าง Set จาก Set ที่มีอยู่แล้ว");
console.log("============================\n");

let set3 = new Set([ "a", "b", "c" ]);
let set4 = new Set(set3);
console.log(set4);