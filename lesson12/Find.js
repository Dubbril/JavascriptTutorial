let a = [ "red", "green", "blue", "yellow" ];
function search(value, index, array) { // ฟังก์ชันคอลแบ็ค
	return value == "blue";
}

let result = a.find(search);
console.log(result);

console.log("\n============================");
console.log("เรียกใช้โดยใช้ พารามิเตอร์ตัวที่สอง");
console.log("============================\n");

let a1 = [ "red", "green", "blue", "yellow" ];
let result1 = a1.find(function(value, index, array) {
	return this[index] == "blue";
}, a1); // อาร์กิวเมนต์ตัวที่ 2

console.log(result1);