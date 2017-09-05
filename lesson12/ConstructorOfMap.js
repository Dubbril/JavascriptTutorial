let map = new Map([[1,"a"],[2,"b"]]);
console.log(map);

console.log("\n============================");
console.log("สร้าง Map ขึ้นมาจาก Map ที่มีอยู่ก่อนแล้ว");
console.log("============================\n");

let map1 = new Map();
map1.set(1,"a");
map1.set(2,"b");

let map2 = new Map(map1);
console.log(map2);