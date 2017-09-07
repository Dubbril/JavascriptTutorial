let array = [5,10];
let set = new Set(["red","green"]);
let map = new Map();
map.set("firstname","Somchai");
map.set("lastname","Jaidee");

for(let value of array.entries()){ // values,keys,entries | for(let value of array)
	console.log(value);
}

for(let value of set.entries()){ // values,keys,entries | for(let value of set)
	console.log(value);
}

for(let value of map.entries()){ // values,keys,entries | for(let value of array)
	console.log(value);
}