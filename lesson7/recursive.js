function factorial(value) {
	if (value <= 0) {
		return 1;
	} else {
		return value * factorial(value - 1); // ไม่ใช่การเรียกฟังก์ชันในตำแหน่งสุดท้าย
	}
}
console.log(factorial(4));
// console.log(factorial(200000)); // จะเกิด error เพราะ stack frame โตเกินไป
// จนใช้หน่วยความจำหมด

console.log("\n\n============================");
console.log("ปรับปรุงการเขียใหม่ โดยใช้หลักการ Tail Call Optimization");
console.log("============================");

"use strict";
function factorial1(value) {
	return callFac(1, value);
}
function callFac(temp, val) {
	if (val <= 1) {
		return temp;
	} else {
		return callFac(temp * val, val - 1);
	}
}
console.log(factorial1(4));
//console.log(factorial1(200000));


console.log("\n\n============================");
console.log("นิพจน์อื่นที่เป็น Tail Call Optimization");
console.log("============================");
let arrowFunc = param => param ? foo() : bar(); // ทั้ง foo และ bar เป็นการเรียกฟังก์ชันในตำแหน่งสุดท้าย
let arrowFunc1 = () => (foo(),bar(),zoo()); // zoo เท่านั้นที่เป็นการเรียกฟังก์ชันในตำแหน่งสุดท้าย
let arrowFunc2 = () => foo() || bar(); //   bar เท่านั้นที่เป็นการเรียกฟังก์ชันในตำแหน่งสุดท้าย
let arrowFunc3 = () => foo() && bar(); // bar เท่านั้นที่เป็นการเรียกฟังก์ชันในตำแหน่งสุดท้าย


