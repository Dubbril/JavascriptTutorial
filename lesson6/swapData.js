let a = 1, b = 2;
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

console.log("\n\n============================");
console.log("เขียนแบบดีสตรัคเตอริง");
console.log("============================");
let a1 = 1, b1 = 2;
[ b1, a1 ] = [ a1, b1 ];
console.log(a1);
console.log(b1);

console.log("\n\n============================");
console.log("ยิ่งตัวแปรมากขึ้นยิ่งทำให้ง่ายขึ้น");
console.log("============================");
let a2 = 1, b2 = 2, c2 = 3, d2 = 4;
console.log(a2, b2, c2, d2);
[ d2, c2, b2, a2 ] = [ a2, b2, c2, d2 ];
console.log(a2, b2, c2, d2);