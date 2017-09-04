let a = {
	x : 1
}, b = {
	y : 2
};
a = null; // ยังไม่ถูก GC มาเรียกคืนหน่วยความจำ
b = null // ยังไม่ถูก GC มาเรียกคืนหน่วยความจำ

console.log("\n============================");
console.log("แม้จะถูกกำหนดเป็น null แต่ก็ยังไม่ถูก GC มาเรียกคืนหน่วยความจำ");
console.log("============================\n");

let set = new Set();
let a1 = {
	x : 1
}, b1 = {
	y : 2
};
set.add(a1).add(b1);
a1 = null // ยังไม่ถูก GC มาเรียกคืนหน่วยความจำ
b1 = null // ยังไม่ถูก GC มาเรียกคืนหน่วยความจำ
console.log(set);

console.log("\n============================");
console.log("การใช้ WeakSet");
console.log("============================\n");

let wset = new WeakSet();
let a2 = {
	x : 1
}, b2 = {
	y : 2
};
wset.add(a2);
wset.add(b2);
console.log(wset.has(a2));
console.log(wset.has(b2));

a2 = null;
b2 = null;

console.log(wset.has(a2));
console.log(wset.has(b2));
