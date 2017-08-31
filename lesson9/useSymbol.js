let sym1 = Symbol();
let sym2 = Symbol("example");
let sym3 = Symbol("example");
console.log(sym2 === sym3);

let sym = Symbol("example");
console.log(sym.toString());
console.log(sym);

console.log(typeof Symbol());
console.log(typeof Symbol("example"));

console.log("\n============================");
console.log("ถ้าอยากรู้ว่าซิมโบลที่ลงทะเบียนไว้มีคีย์ชื่ออะไร");
console.log("============================\n");

let sym0 = Symbol.for("uid0");
console.log(Symbol.keyFor(sym0));

let sym9 = Symbol("uid0");
console.log(Symbol.keyFor(sym9));

console.log("\n============================");
console.log("ตั้งชื่อแบบ namespace");
console.log("============================\n");

Symbol.for("dojo.uid");
Symbol.for("jquery.uid");