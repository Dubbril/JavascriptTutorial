let wmap = new WeakMap();
let a = {x:1}, b = {y:2};
wmap.set(a,"foo");
wmap.set(b,"bar");
console.log(wmap.get(a));
console.log(wmap.get(b));

a = null; // จะรอให้ GC มาเรียกคืนหน่วยความจำ
b = null; // จะรอให้ GC มาเรียกคืนหน่วยความจำ

console.log(wmap.get(a)); // undefined
console.log(wmap.get(b)); // undefined

console.log("\n============================");
console.log("ถ้าข้อมุลของ Map ถูกกำหนดให้เป็น Null ก็จะไม่มีผล");
console.log("============================\n");

let wmap1 = new WeakMap();
let a1 = {x:1}, b1 = {y:2};
wmap1.set(a1,b1);

b1 = null;
console.log(wmap1.get(a1));