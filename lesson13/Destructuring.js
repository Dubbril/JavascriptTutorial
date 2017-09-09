console.log("\n============================");
console.log("Example 1");
console.log("============================\n");

let [a,b,c] = new Set(["a","b","c"]);
console.log(a,b,c);

console.log("\n============================");
console.log("Example 2");
console.log("============================\n");

let map = new Map();
map.set("firstname","Somchai");
map.set("lastname","Jaidee");
// let map = new map([["firstname","lastname"],["Somchai","Jaidee"]]);

let [a1,b1] = map;
console.log(a1);
console.log(b1);

let [[key1,value1],[key2,value2]] = map;
console.log(key1,value1);
console.log(key2,value2)

console.log("\n============================");
console.log("Example 3");
console.log("============================\n")

let uint8 = new Uint8Array(2);
[...uint8] = [10,20];
console.log(uint8[0],uint8[1]);

console.log("\n============================");
console.log("Example 4");
console.log("============================\n")

let a2 = [], a3 = [];
let set = new Set([10,20]);
[...a2] = [...set];
console.log(a2[0],a2[1]);

let  map1 = new Map([["firstname","Somchai"],["lastname","Jaidee"]]);
[...a3] = [...map1];
console.log(a3[0]);
console.log(a3[1]);
console.log(a3[0][0],a3[0][1]);
console.log(a3[1][0],a3[1][1]);

console.log("\n============================");
console.log("Example 5");
console.log("============================\n")

let array_2 = [5,10];
let set_2 = new Set(["red","green"]);
let map_2 = new Map([["firstname","Somchai"],["lastname","Jaidee"]]);
let uint8_2 = new Uint8Array(2);
[...uint8_] = [10,20];

for(let [key,value] of array_2.entries()){
	console.log(key,value);
}

for(let [key,value] of set_2.entries()){
	console.log(key,value);
}

for(let [key,value] of map_2.entries()){
	console.log(key,value);
}

for(let [key,value] of uint8_2.entries()){
	console.log(key,value);
}

console.log("\n============================");
console.log("Example 6");
console.log("============================\n")

function myFunction(){
	return new Set(["red","green"]);
}

let [a4,b5] = myFunction();
console.log(a4,b5);
