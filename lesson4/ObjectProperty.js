var font = {
	color : "red",
	myFunction : function(param) {

	},
	option : {
		value : 1
	}
};

console.log("=========================");

var obj = {
	a : 1,
	myFunction : function() {
		console.log("call myFunction");
	}
};
obj.a = 100;
console.log(obj.a);
console.log(typeof obj.myFunction);
obj.myFunction();

console.log("=========================");

var student = {
	"First name" : "Somchai",
	"Last name" : "Jaidee",
	"Who are you" : function() {
		console.log("I'm a student");
	},
	nickname : "Tom"
};

console.log(student["First name"]);

var lastName = "Last name";
console.log(student[lastName]);

student["Who are you"]();
console.log(student.nickname);
console.log(student["nickname"]);

console.log("=========================");

var obj = {
		1:1,
		true:2,
		null :3,
		undefined:4
};

console.log(obj[1+0]);
console.log(obj[true && true]);
console.log(obj[null]);
console.log(obj[undefined]);


console.log("=========================");

var obj = {};
obj.a = 1;
obj[1] = 100;
obj["property name"]=200;
obj.myFunction = function(){
	console.log("to do somthing");
}

console.log(obj.a);
console.log(obj[1]);
console.log(obj["property name"]);
obj.myFunction();



