let array = Array.of("a", "b", "c", "d");
console.log(array);

array.fill(1);
console.log(array);

console.log("\n============================");
console.log("เรียกใช้โดยใช้ พารามิเตอร์ตัวที่สอง");
console.log("============================\n");

let array1 = [ null, null, null, null, null ].fill(10, 1);
console.log(array1);

console.log("\n============================");
console.log("เรียกใช้โดยใช้ พารามิเตอร์ตัวที่สาม");
console.log("============================\n");

let array3 = [ null, null, null, null, null ].fill(10, 1, 4);
console.log(array3);