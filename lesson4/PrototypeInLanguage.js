console.log(Object.getPrototypeOf(function(){}) === Function.prototype);
console.log(Object.getPrototypeOf([]) === Array.prototype);
console.log(Object.getPrototypeOf({}) === Object.prototype);
console.log(Object.getPrototypeOf('') === String.prototype);
console.log(Object.getPrototypeOf(true) === Boolean.prototype);
console.log(Object.getPrototypeOf(1) === Number.prototype);

console.log(function(){} instanceof Function);
console.log([] instanceof Array);
console.log({} instanceof Object);
console.log('' instanceof String);
console.log(true instanceof Boolean);
console.log(1 instanceof Number);