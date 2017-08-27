function createGrade(firstName,lastName,[gendar,age,subject,gpa]){
	console.log(firstName,lastName,gendar,age,subject,gpa);
}

let options = ["Male","18","Math"];
createGrade("Somchai","Jaidee",options);

console.log("\n\n============================");
console.log("แบบ Default Parameter");
console.log("============================");
function createGrade1(firstName,lastName,[gendar="Male",age=18,subject="Math",gpa=0]){
	console.log(firstName,lastName,gendar,age,subject,gpa);
}

let options1 = ["Female","21","Science"];
createGrade1("Somchai","Jaidee",options1);

createGrade1("Somchai","Jaidee",[]);

//createGrade1("Somchai","Jaidee"); // error เพราะไม่ระบุ parameter ลำดับที่ 3

console.log("\n\n============================");
console.log("แก้ไขใหม่ ไม่ส่ง arguments ตัวที่ 3");
console.log("============================");
function createGrade2(firstName,lastName,[gender="Male",age=18,subject="Math",gpa=0]=[]){
	console.log(firstName,lastName,gender,age,subject,gpa);
}

createGrade2("Somchai","Jaidee");