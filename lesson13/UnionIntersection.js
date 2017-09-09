let a = new Set ([1,2,3,4,5]);
let b = new Set ([3,4,5,6,7]);
let union = new Set([...a,...b]);
console.log(...union);