//var arrowFunc = () => console.log(arguments);
//arrowFunc(1,2,3);

// เขียนแบบธรรมดา
var arrowFunc2 = function(){
	return console.log(arguments);
};
arrowFunc2(1,2,3);

console.log("\n\n============================");
console.log("การเขียน arrow function ที่สามารถเรียกใช้ argument ได้");
console.log("============================");
function createArrow(value){
	return () => arguments[0];
}

let arrowFunc = createArrow(1);
console.log(arrowFunc());