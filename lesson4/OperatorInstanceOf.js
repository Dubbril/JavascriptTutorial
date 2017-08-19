function Foo() {
};
var obj = new Foo();
console.log(obj instanceof Foo);
console.log(Object.getPrototypeOf(obj) === Foo.prototype);

console.log(obj instanceof Object);
console.log(Foo.prototype instanceof Object);
console.log(Object.getPrototypeOf(Foo.prototype) === Object.prototype);