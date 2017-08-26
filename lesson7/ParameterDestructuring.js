function createGrade(firstName,lastName,{gendar,age,subject,gpa}){
	console.log(firstName,lastName,gendar,age,subject,gpa);
}

createGrade("Somchai","Jaidee",{gendar:"Male",age:21,subject:"Math",gpa:3.44});


console.log("\n\n============================");
console.log("พารามิเตอร์แบบดีสตรัคเตอริง");
console.log("============================");
function creaetGrade1(firstName,lastName,options){
	let {gendar,age,subject,gpa} = options;
	// option ห้ามมีค่า null หรือ undefined เพราะจะเกิด error
	
	console.log(firstName,lastName,gendar,age,subject,gpa);
}

creaetGrade1("Somchai","Jaidee",{gendar:"mail",age:21,subject:"Math",gpa:3.44});

console.log("\n\n============================");
console.log("ส่ง arguments ตัวที่สามมาเป็น object เปล่า");
console.log("============================");
function createGrade2(firstName,lastName,{gendar="Male",age=18,subject="Math",gpa=0}){
	console.log(firstName,lastName,gendar,age,subject,gpa);
}
createGrade2("Somchai","Jaidee",{});


console.log("\n\n============================");
console.log("ไม่ส่ง arguments ตัวที่ 3");
console.log("============================");
function createGrade3(firstName,lastName,{gendar="Male",age=18,subject="Math",gpa=0}={}){
	console.log(firstName,lastName,gendar,age,subject,gpa);
}
createGrade3("Somchai","Jaidee");


