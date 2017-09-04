let a1 = [ 0, 1, 2, 3, 4, 5 ];
a1.copyWithin(3, 0);
console.log(a1);

let a2 = [ 0, 1, 2, 3, 4, 5 ];
a2.copyWithin(3, 0, 2);
console.log(a2);

let a3 = [ 0, 1, 2, 3, 4, 5 ];
a3.copyWithin(0, -2);
console.log(a3);

let a4 = [ 0, 1, 2, 3, 4, 5 ];
a4.copyWithin(0, -3, -1);
console.log(a4);

// พารามิเตอร์ตัวแรกคือตำแหน่งเริ่มต้น ที่เขียนลงไป พารามิเตอร์ตัวที่ 2 คือตำแหน่งที่เริ่ม copy ส่วนพารามิเตอร์ที่ 3 คือตำแหน่งที่หยุด