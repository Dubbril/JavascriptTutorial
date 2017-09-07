let array = [1,5];
let iterator = array[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log("\n============================");
console.log("String Iterator");
console.log("============================\n");

let say = "hi";
let iterator1 = say[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

console.log("\n============================");
console.log("Other Collection");
console.log("============================\n");

console.log(typeof String.prototype[Symbol.iterator]);
console.log(typeof Array.prototype[Symbol.iterator]);
console.log(typeof Set.prototype[Symbol.iterator]);
console.log(typeof Map.prototype[Symbol.iterator]);
console.log(typeof Uint8Array.prototype[Symbol.iterator]);
console.log(typeof WeakSet.prototype[Symbol.iterator]);
console.log(typeof WeakMap.prototype[Symbol.iterator]);


















