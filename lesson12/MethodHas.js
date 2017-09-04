let set = new Set();
let b = {
	b : 2
};
set.add(b);
set.add(0);

console.log(set.has(b));
console.log(set.has(0));
console.log(set.has(-0));
console.log(Object.is(0, -0));