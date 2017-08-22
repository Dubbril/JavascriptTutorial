console.log(Number.isInteger(34.6));
console.log(Number.isInteger(34.0));
console.log(Number.isInteger(34));

console.log("=======================");
console.log(Math.pow(2, 53));
console.log(Math.pow(2, 53) + 1);
console.log(Math.pow(2, 53) + 2);
console.log(Math.pow(2, 53) + 3);
console.log(Math.pow(2, 53) * 100)

console.log("=======================");
var upper = Number.MAX_SAFE_INTEGER;
console.log(Number.isSafeInteger(upper));
console.log(Number.isInteger(upper));

var outside_upper = upper + 1;
console.log(Number.isSafeInteger(outside_upper));
console.log(Number.isInteger(outside_upper));

var lower = Number.MIN_SAFE_INTEGER;
console.log(Number.isSafeInteger(lower));
console.log(Number.isInteger(lower));

var outside_lower = lower - 1;
console.log(Number.isSafeInteger(outside_lower));
console.log(Number.isInteger(outside_lower));