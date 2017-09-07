let buffer = new ArrayBuffer(32); // ระบุความยาว 32 ไบต์ (256 บิต)
console.log(buffer.byteLength);

let uint16 = new Uint16Array(buffer);
console.log(uint16.length);

console.log("\n============================");
console.log("การกระทำผ่าน uint16");
console.log("============================\n");

let buffer1 = new ArrayBuffer(2); // 2 ไบต์ (16 บิต)
let uint16_1 = new Uint16Array(buffer1);
console.log(uint16_1.length);
uint16_1[0] = 0b0001110000001111; // 7183 เลขฐาน 10
console.log(uint16_1[0] == 7183);

console.log("\n============================");
console.log("การแชร์ buffer ใน Array ระดับบิต");
console.log("============================\n");

let buffer2 = new ArrayBuffer(2);
let uint16_2 = new Uint16Array(buffer2); // สมาชิกตัวเดียวขนาด 16 บิต
let uint8 = new Uint8Array(buffer2); // มีสมาขิก 2 ตัวๆ ละ 8 บิต

uint16_2[0] = 0x105b; // 4187 (เลขฐานสิบ)
console.log(uint8[0] == 0x5b);
console.log(uint8[1] == 0x10);
[uint8[1],uint8[0]] = [uint8[0],uint8[1]] // สลับข้อมูล (ดีสตรัคเตอริง)
console.log(uint8[0] == 0x10);
console.log(uint8[1] == 0x5b);
console.log(uint16_2[0]);
