function myFunction(param1, param2) {
	param1.a = 3;
	param2 = 300;
}

var obj = {
	a : 1,
	b : 2
}, value = 100;

myFunction(obj, value);
console.log(obj.a);
console.log(value);

console.log("=========================");

var obj1 = {
	a : 1,
	b : 2
};
var obj2 = obj1;
obj2.a = 3;
console.log(obj1.a);

var value1 = 1;
var value2 = value1;
value2 = 3;
console.log(value1);

console.log("=========================");

var obj = {
	a : 1,
	foo : function() {
		return 2;
	},
	bar : function() {
		console.log(this.a);
	},
	zoo : function() {
		console.log(this.foo());
	}
}

obj.bar();
obj.zoo();

console.log("=========================");

var obj = {
	foo : function() {
		this.a = 1;
		console.log(this.a);
	},
	bar : function() {
		console.log(this.a);
	}
};

obj.foo();
obj.bar();
console.log(obj.a);

console.log("=========================");

var obj1 = {};
var obj2 = {
	a : 1,
	bar : function() {
		console.log("this.a = ", this.a);

		obj1.foo = function() {
			console.log("this.a = ", this.a);
		}
	}
};
obj2.bar();
obj1.foo();

console.log("=========================");
