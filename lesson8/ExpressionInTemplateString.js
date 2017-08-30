let name = "Somchai";
let msg = `My name is ${name}`;
console.log(msg);

let a = 5, b = 10, c = 100;
console.log(`Price $${(a*b).toFixed(2)}, not ${c + a}`);

console.log("\n============================");
console.log("ข้อควรระวังในเรื่องขอบเขตการมองเห็น");
console.log("============================\n");

function myFunction(){
	let name = "Somchai";
}
console.log(`My name is ${name}`); // อาจเกิด error ได้ขึ้นอยู่กับ engine