var obj1 = {
	value : 20
};
var obj2 = {
	myFunction : function(param1, param2) {
		var value = this.value; // this ชี้ไปยัง object1
		console.log(param1, param2, value);
	}
};

obj2.myFunction(1, 10);
obj2.myFunction.call(obj1, 1, 10)
obj2.myFunction.apply(obj1, [ 1, 10 ]);

var f = obj2.myFunction.bind(obj1, 1, 10);
f();