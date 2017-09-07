let int32 = new Int32Array(3);
int32[0] = 1;
int32[1] = 2;
int32[2] = 3;

let result = int32.map(function(i) {
	return i * i
});

let join = int32.join(",");
console.log(join);

console.log("\n============================");
console.log("sort Array Level Bit");
console.log("============================\n");

var array = [10,1,15];
array.sort();
console.log(array);
let uint8 = new Uint8Array([1,10,5]);
uint8.sort();
console.log(uint8);

console.log("\n============================");
console.log("sort Array Level Bit Calculator");
console.log("============================\n");

let uint8_1 = new  Uint8Array(2);
uint8_1[0] = 20;
uint8_1[1] = 40;
let result_1 = uint8_1.map(function(i){
	return i*i;
});

console.log(result_1[0]); // จริงๆ ควรได้ 400
console.log(result_1[1]); // จริงๆ ควรได้ 1600

console.log("\n============================");
console.log("sort Array Level Bit Calculator ประยุกต์ด้วย Array.from()");
console.log("============================\n");

let result_2 = Uint8Array.from(uint8_1,function(i){
	return i*i;
});
console.log(result_2);

let result_3 = Array.from(uint8_1,function(i){
	return i * i;
});
console.log(result_3);


