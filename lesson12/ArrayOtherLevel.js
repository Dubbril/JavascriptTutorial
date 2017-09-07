let buffer = new ArrayBuffer(2); // 2 ไบต์ (16 บิต)
let a = new Int16Array(buffer); // มองเห็น 16 บิต ของ buffer
let b = new Int8Array(buffer,0,1); // มองเห็น 8 บิตล่าง ของ buffer
let c = new Int8Array(buffer,1,1); // มองเห็น 8 บิตบน ของ buffer
let d = new Int8Array(buffer,1); // เข้าถึง buffer ตั้งแต่ offset มีค่าเป็น 1 เป็นต้นไป

a[0] = 0x105b; // 4187 (เลขฐานสิบ)
console.log(b[0] == 0x5b);
console.log(c[0] == 0x10);
console.log(d[0] == 0x10);

console.log("\n============================");
console.log("การสร้างอาร์เรย์ระดับบิตโดยไม่ระบุ buffer");
console.log("============================\n");

let a1 = new Float32Array(2);
console.log(a1.length);
console.log(a1[0],a1[1]);

let b1 = new Float64Array(a1);
console.log(b1.length);
console.log(b1[0],b1[1]);

let c1 = new Int32Array([100,200]);
console.log(c1[0],c1[1]);

let likeArray = {
	length: 2,
	0: 300,
	1: 400
}
let d1 = new Uint32Array(likeArray);
console.log(d1[0],d1[1]);