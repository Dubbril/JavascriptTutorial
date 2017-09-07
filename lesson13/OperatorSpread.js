let array = [..."abc"]; // จะเหมือนเขียนเป็น let array = ["a","b","c"];
console.log(array[0],array[1],array[2]);

let set = new Set(["a","b","c"]);
let array1 = [...set];
console.log(array1[0],array1[1],array1[2]);


console.log("\n============================");
console.log("keys,values,entries");
console.log("============================\n");

let set1 = new Set(["a","b","b","c","c",]); // Set {"a","b","c"};
let keys = [...set.keys()];
let values = [...set.values()];
let entries = [...set.entries()];

console.log(keys);
console.log(values);
console.log(entries[0][0]);
console.log(entries[0][1]);
console.log(entries[1][0]);
console.log(entries[1][1]);
console.log(entries[2][0]);
console.log(entries[2][1]);

console.log("\n============================");
console.log("Spread with Map");
console.log("============================\n");

let map = new Map([[1,"a"],[2,"b"]]);
let keys1 = [...map.keys()];
let values1 = [...map.values()];
let entries1 = [...map.entries()];

console.log(keys1);
console.log(values1);
console.log(entries1[0][0]);
console.log(entries1[0][1]);
console.log(entries1[1][0]);
console.log(entries1[1][1]);
console.log([...map]);

console.log("\n============================");
console.log("Spread with Array");
console.log("============================\n");

let array2 = [];
array2.length = 3;
array2[1] = "a";
console.log(...array2.keys());
//console.log(...array2.values()); // support some browser
console.log(...array2.entries());
console.log(...array2);


console.log("\n============================");
console.log("Spread with Bit Array");
console.log("============================\n");

let uint8 = new Uint8Array(2);
uint8[0] = 10;
uint8[1] = 20;

console.log(...uint8.keys());
console.log(...uint8.values());
console.log(...uint8.entries());
console.log(...uint8);


console.log("\n============================");
console.log("Spread with Collection");
console.log("============================\n");

let set4 = new Set([1,2,3]);
let array4 = [10,20,30];

function plus(a,b,c){
	console.log(a+b+c);
}

plus(...set4);
plus(...array4);















