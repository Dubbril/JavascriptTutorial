var obj1 = {};
Object.defineProperty(obj1, "foo", {
	value : 100,
	writable : true
});

console.log(obj1.foo);
console.log(Object.getOwnPropertyDescriptor(obj1, "foo"));

var obj2 = {};
Object.defineProperties(obj2, {
	"foo" : {
		value : "fooValue",
		writable : true
	},
	"bar" : {
		value : "barValue",
		writable : false
	}
});

console.log(obj2.foo, obj2.bar);
console.log(Object.getOwnPropertyDescriptor(obj2, "foo"))
console.log(Object.getOwnPropertyDescriptor(obj2, "bar"));