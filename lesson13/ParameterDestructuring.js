function createGrade(firstName,lastName,[gender="Male",age=18,subject="Math",gpa=0]){
	console.log(firstName,lastName,gender,age,subject,gpa);
}

let set = new Set(["Female","21","Science","3.44"]);
let map = new Map([["k1","Male"],["k2","19"],["k3","Math"],["k4","3.20"]]);

createGrade("Somchai","Jaidee",set);
createGrade("Mana","Dekdee",map.values());