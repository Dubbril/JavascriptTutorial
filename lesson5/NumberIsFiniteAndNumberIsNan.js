console.log(isFinite(2560));
console.log(isFinite("2560"));
console.log(Number.isFinite(2560));
console.log(Number.isFinite("2560"));

console.log(isNaN(NaN));
console.log(isNaN("NaN"));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("NaN"));

console.log(typeof global.isFinite);
console.log(typeof global.isNaN);