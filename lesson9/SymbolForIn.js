let obj = {};
obj.car = "100";
obj["zoo"] = "200";
obj[Symbol("foo")] = "foo";
obj[Symbol("bar")] = "bar";

for ( let i in obj) {
	console.log(i);
}

// ประโยค for จะแสดงผลลัพธ์ car zoo

let keys = Object.getOwnPropertyNames(obj);
console.log(keys);

console.log("\n============================");
console.log("ถ้าเปลี่ยนมาใช้เมธอด Object.getOwnPropertySymbols() จะรีเทิร์นค่า array ที่สมาชิกประกอบเป็น key ที่เป็นซิมโบล");
console.log("============================\n");

let keys1 = Object.getOwnPropertySymbols(obj);
console.log(keys1);