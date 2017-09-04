let a = [ "red", "green", "blue", "yellow" ];
let search = function(value, index, array) { // ฟังก์ชันคอลแบค
	return value == "blue";
};
let result = a.findIndex(search);
console.log(result);

console.log("\n============================");
console.log("เรียกใช้โดยใช้ พารามิเตอร์ตัวที่สอง");
console.log("============================\n");

let a1 = [ "red", "green", "blue", "yellow" ];
let result1 = a1.findIndex(function(value, index, array) {
	return this[index] == "blue";
}, a1);
console.log(result1);