 "use strict";
function myFunction() {
	return this;
}

var obj = myFunction();
console.log(typeof obj);