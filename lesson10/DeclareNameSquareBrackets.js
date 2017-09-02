let name = "name";
let student = {
		["First "+name] : "Somchai",
		[`Last ${name}`] : "Jaidee"
};
console.log(student["First name"]);

let LastName = `Last ${name}`;
console.log(student[LastName]);

console.log("\n============================");
console.log("สามารถประกาศให้มีคีย์เป็นออบเจ็กได้");
console.log("============================\n");

let key1 = {a:1};
let key2 = {b:2};
let obj = {
		[key1] : 100,
		[key2] : 200 // ใช้ข้อมูลคีย์ตัวนี้
}
console.log(obj[key1],obj[key2]);
console.log(obj[key1] === obj[key2]);

console.log("\n============================");
console.log("สามารถตั้งชื่อคีย์เป็นวงเล็บเหลี่ยมได้");
console.log("============================\n");

let name1 = "myFunction";
let obj1 = {
		[name1]:function(param){ // ประกาศเมธอทโดยใช้วงเล็บเหลี่ยม
			console.log(param);
		} 
};
obj1[name1](200);
obj1.myFunction(200);



console.log("\n============================");
console.log("ประกาศใหม่เป็นแบบย่อ");
console.log("============================\n");

let name2 = "myFunction";
let obj2 = {
		[name2](param){ //ประกาศแบบย่อ
			console.log(param);
		}
};
obj2[name2](200);
obj2.myFunction(200);