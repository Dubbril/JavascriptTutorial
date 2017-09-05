let map = new Map();
map.set(1,"a");
map.set(2,"b");

console.log(map.get(1));
console.log(map.get(2));

console.log("\n============================");
console.log("เรียกใช้ has ใน Map");
console.log("============================\n");

let map1 = new Map();
map1.set(0,"a");
map1.set(1,"b");

console.log(map1.has(0));
console.log(map1.has(-0));
console.log(map1.has(1));