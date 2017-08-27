let arrowFunc = function(value) {
	return value;
};
console.log(arrowFunc(122));


console.log("\n\n============================");
console.log("เขียนแบบ Arrow Function");
console.log("============================");

let arrowFunc1 = value =>{
	return value;
};
console.log(arrowFunc1(122));


console.log("\n\n============================");
console.log("ถ้ามีเพียงนิพจน์เดียว ก็ไม่ต้องเขียนเครื่องหมายปีกกา");
console.log("============================");
let arrowFunc2 = value => value;
console.log(arrowFunc2(122));

// จะเสมือนเขียน
/*
 * let arrowFunc2 = function(value){ return value; };
 */

let arrowFunc3 = value => console.log(value);
arrowFunc3(122);
// จะเสมือนเขียนเป็น
/*
 * let arrowFunc3 = function(value){ return console.log(value); };
 */

console.log("\n\n============================");
console.log("ฟังก์ชันที่ไม่มี parameter");
console.log("============================");
let arrowFunc4 = () => 122;
console.log(arrowFunc4());

// จะเหมือนเขียนเป็น
/*
 * let arrowFunc4 = function(){ return 122; };
 */

// ฟังก์ชันที่ไม่มีพารามิเตอร์ และบอดีของฟังก์ชันก็ว่างเปล่า
let arrowFunc5 = () =>{};
arrowFunc5();

// จะเสมือนเขียนเป็น
// var arrowFunc5 = function(){};

// ใส่เครื่องหมายวงเล็บ เพื่อครอบออบเจ็คที่ถูกรีเทิร์นออกมา
let getFont = () => ({color:"red",size:200});
console.log(getFont());

// จะเสมือนเขียนเป็น
/*
 * let getFont = function(){ return {color:"red",size:200}; };
 */

// มีวงเล็บครอบพารามิเตอร์เอาไว้
let sum = (val1,val2,val3) => val1+val2+val3;
console.log(sum(1,2,3));

// จะเสมือนเขียนเป็น
/*
 * let sum = function(val1,val2,val3){ return val1+val2+val3; };
 */

// ฟังก์ชันลูกศรที่มีพารามิเตอร์แบบดีฟอลต์
let sum1 = (val1 = 1,val2 = 2,val3 = 3) => val1+val2+val3;
console.log(sum1());

// จะเสมือนเขียนเป็น
/*
 * let sum1 = function(val1=1,val2=2,val3=3){ return val1+val2+val3; }
 */

// ฟังก์ชันลูกศรที่ใช้ parameter แบบ rest
let max = (...value) => Math.max(...value);
console.log(max(1,2,3,6));

// จะเสมือนเขียน
/*
 * let max = function(...value){ return Math.max(...value); }
 */


// ตรวจสอบ Function ลูกศร
let arrowFunc6 = value => value;
console.log(typeof arrowFunc6);
console.log(arrowFunc6 instanceof Function);


// การใช้  key name กับ arrow function
let arrowFunc7 = () => {};
console.log(arrowFunc7.name);










