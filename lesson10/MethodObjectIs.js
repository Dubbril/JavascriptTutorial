console.log("\n============================");
console.log("เปรียบเทียบค่าของ NaN");
console.log("============================\n");

console.log(NaN === NaN);
console.log(NaN === 0/0);
console.log(Object.is(NaN,NaN));
console.log(Object.is(NaN,0/0));

console.log("\n============================");
console.log("เปรียบเทียบค่าของ 0");
console.log("============================\n");

console.log(+0 === -0);
console.log(Object.is(+0,-0));

console.log("\n============================");
console.log("เปรียบเทียบออบเจ็กต์");
console.log("============================\n");

console.log([] === []);
console.log({} === {});
console.log(Object.is([],[]));
console.log(Object.is({},{}));

var obj = {x:1,y:2};
console.log(obj === obj);
console.log(Object.is(obj,obj));

console.log("\n============================");
console.log("เปรียบเทียบค่า undefined, null");
console.log("============================\n");

console.log(undefined === undefined);
console.log(null === null);
console.log(Object.is(undefined,undefined));
console.log(Object.is(null,null));

console.log("\n============================");
console.log("เปรียบเทียบสตริง");
console.log("============================\n");

console.log("Hello" === "Hello");
console.log(Object.is("Hello","Hello"));

console.log("\n============================");
console.log("เปรียบเทียบบูลีน");
console.log("============================\n");

console.log("" === false);
console.log(0 === false);
console.log(0 === "");
console.log(false === false);
console.log(Object.is("",false));
console.log(Object.is(0,false));
console.log(Object.is(0,""));
console.log(Object.is(false,false));


















