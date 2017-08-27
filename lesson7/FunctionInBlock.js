"use strict";
if(true){
	sayHello();
	function sayHello(){
		console.log("to do something");
		console.log(sayBye.name);
		function sayBye(){
			
		}
	}
	console.log(typeof sayHello);
	console.log(typeof sayBye);
}
console.log(typeof sayHello);
console.log(typeof sayBye);

console.log("\n\n============================");
console.log("การประกาศแบบ let function จะไม่ลอยไปประกาศอยุ่บนสุด");
console.log("============================");
if(true){
//	console.log(typeof sayHello); // undefined
	let sayHello = function(){
		
	}
	console.log(typeof sayHello);
}
console.log(typeof sayHello);