let a = [ 1, 2, 3 ];
let array1 = Array.from(a);
console.log(array1);

let str = "456";
let array2 = Array.from(str);
console.log(array2);

let set = new Set([ 7, 8, 9 ]);
let array3 = Array.from(set);
console.log(array3);

console.log("\n============================");
console.log("Array from ยังสามารถรับค่าเป็นออบเจ็กต์");
console.log("============================\n");

let obj = {
	length : 4,
	1 : "foo",
	2 : "boo"
};

let array = Array.from(obj);
console.log(array.length);
console.log(array);

console.log("\n============================");
console.log("สร้างอาร์เรย์ทีสมาชิกทุกตัวเป็น undefined");
console.log("============================\n");

let a1 = Array.from({
	length : 4
}); // มีสมาชิกทั้งหมด 4 ตัวที่มีค่าเป็น undefined
console.log(a1);

let c = Array.apply(null, {
	length : 4
});
console.log(c);

console.log("\n============================");
console
		.log("แปลงค่าสมาชิกของออบเจ็กต์(อาร์กิวเมนต์ตัวแรก) ให้กลายมาเป็นค่าใหม่");
console.log("============================\n");

let obj1 = {
	length : 4,
	1 : "foo",
	2 : "bar"
};

let toUpper = function(value, index) { // ฟังก์ชันคอลแบ็ค
	if (typeof value == "string") {
		return value.toUpperCase(); // รีเทิร์นสตริงตัวใหญ่
	} else {
		return "index_" + index; // รีเทิร์นข้อความที่ขึ้นต้นด้วยคำว่า
		// "index_" แล้วตามด้วยอินเด็กซ์
	}
};

let array4 = Array.from(obj1, toUpper);
console.log(array4);

console.log("\n============================");
console.log("Array.from ยังสามารถรับอาร์กิวเมนต์ตัวที่ 3 ที่ใช้เป็นค่า this");
console.log("============================\n");

let obj2 = {
	length : 4,
	1 : "foo",
	2 : "bar"
};

let array5 = Array.from(obj, function(value, index) {
	// console.log(this === obj); //true
	return this[index];
}, obj);
console.log(array5);
