let val = [ -134, -20, -7, 33, 10 ];
console.log(Math.max(...val));

console.log("\n\n============================");
console.log("โอเปอเรเตอร์สเปรด กับอากิวเมนต์ธรรมดา");
console.log("============================");
console.log(Math.max(...val,100));
console.log(Math.max(34,67,...[-134,-20,-7,33,10],2,-90,1));

let array = [34,67,...[-134,-20,-7,33,10],2,-90,1];
console.log(array);

let a,b;
let spreadArr = [];
[a,b,...spreadArr] = [-134,-20,-7,33,10];
console.log(a,b);
console.log(spreadArr);