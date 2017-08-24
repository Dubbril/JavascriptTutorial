var message = "foo";
let count = 100;
if (true) {
	const message = "bar";
	const count = 1;
	// มองตัวแปร message และ count ที่ประกาศเป็นค่าคงที่ต่างกัน
	console.log(message);
	console.log(count);
}
// มองเห็นและเข้าถึง message และ count ที่อยู่นอกบล็อกของ if
console.log(message);
console.log(count);

console.log("==============================");
const obj = {
	value : 100
};
obj.value = 1; // ข้อมูลที่เป็น object สามารถแก้ไขภายใน object ได้
console.log(obj.value);
// obj = 10; // จะเกิด error เพราะแก้ไขค่าคงที่

console.log("===============================");
let obj1 = {
	key1 : true,
	key2 : true,
};
for ( const key in obj1) {
	console.log(key);
}

console.log("===============================");
for(const value of [1,2]){
	console.log(value);
}
