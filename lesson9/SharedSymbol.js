let uid = Symbol.for("uid");
console.log(uid);

let sym1 = Symbol.for("uid");
let sym2 = Symbol.for("uid");
console.log(sym1 === sym2);
console.log(sym1);

// เนื่องจาก sym1 กับ sym2 คือซิมโบลตัวเดียวกัน จึงสามารถใช้แทนกันได้
let obj = {[sym1] : 100};
console.log(obj[sym2]);