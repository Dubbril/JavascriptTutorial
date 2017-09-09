let parent = {parentKey: 1};
let obj = {
		__proto__:parent // กำหนดโปรโตไทป์เป็น parent
};
console.log(obj.parentKey);

obj.z = 100;
obj.y = 200;
obj [Symbol("c")] = "symbol c";
obj [Symbol("a")] = "symbol a";

obj[3.14] = 400;
obj[-10] = 300;
obj[null] = 500;
obj[undefined] = 600;
obj[true] = 700;
obj[{}] = 800;

obj[10] = "foo";
obj[0] = "bar";

console.log(Reflect.ownKeys(obj));

console.log(Object.getOwnPropertyNames(obj));

console.log(Object.getOwnPropertySymbols(obj));