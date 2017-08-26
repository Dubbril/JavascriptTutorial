function myFunction(a,b=2){
	console.log(a,b);
	console.log(arguments.length);
	console.log(arguments[0],arguments[1]);
	
	a = 10,b=10; // แก้ไขค่าของตัวแปร a กับ b จะไม่มีผลกระทบอะไรต่อ arguments
	console.log(a,b,arguments[0]);
}

myFunction(1);

console.log("\n\n============================");
console.log("ความสัมพันธ์ระหว่าง arguments กับพารามิเตอร์แบบ rest");
console.log("============================");
function myFunction1(...rest){
	rest[0] = 10,rest[1] = 10; // แก้ไขค่าของตัวแปร rest
	console.log(rest[0],rest[1]);
	
	console.log(arguments[0],arguments[1]);
	console.log(rest[0] == arguments[0]);
	console.log(rest[1] == arguments[1]);
}

myFunction1(4,5);