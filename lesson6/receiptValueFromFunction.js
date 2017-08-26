function myFunction(){
	return {a:1,b:2};
}

let {a,b} = myFunction();
console.log(a,b);

console.log("\n\n============================");
console.log("แบบ array");
console.log("============================");

function myFunctionArr(){
	return [1,2];
}
let [a1,b1] = myFunctionArr();
console.log(a1,b1);