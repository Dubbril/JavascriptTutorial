let a = new Set([1,2,3,4,5]);
let b = new Set([3,4,5,6,7]);
let temp = [...a];
let intersect = new Set(temp.filter(item => b.has(item)));

// หรือจะเขียนสั้นได้เป็น
// let let intersect = new Set([...a].filter(item=>b.has(item)));

console.log(...intersect);

console.log("\n============================");
console.log("ผลต่างของ set");
console.log("============================\n");

let a1 = new Set([1,2,3,4,5]);
let b1 = new Set([3,4,5,6,7]);
let temp1 = [...a];
let diff = new Set(temp1.filter(item => !b.has(item)));

// หรือจะเขียนสั้นๆได้เป็น
// let diff = new Set([...a].filter.(item => !b.has(item)));

console.log(...diff);