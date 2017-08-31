let boo = new Boolean();
let str = new String();
let num = new Number();
// let sym = new Symbol(); // จะเกิด error เพราะไม่สามารถประกาศด้วยการ New ได้

console.log("\n============================");
console.log("แต่สามารถสร้าง Object มาห่อหุ้มได้");
console.log("============================\n");

let sym = Symbol("example");
let symObj1 = Object(sym);
let symObj2 = new Object(sym);
console.log(typeof sym);
console.log(typeof symObj1);
console.log(typeof symObj2);

console.log("\n============================");
console.log("ถ้าใช้ == เปรียบเทียบอาจจะได้ค่าที่เพี้ยนจากความเป็นจริงได้");
console.log("============================\n");

let sym2 = Symbol("example");
console.log(sym2 == Object(sym2));