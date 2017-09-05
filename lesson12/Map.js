let map = new Map();
map.set("1","Hello");
map.set("1","Hi");
map.set({id:2},"World");
map.set({id:2},"World");
map.set(null,"You");
map.set(null,"We");
map.set(undefined,"Good");
map.set(undefined,"Bye");

console.log(map);

console.log("\n============================");
console.log("สามารถเรียกต่อเนื่องได้");
console.log("============================\n");

let map1 = new Map();
map1.set(1,"a").set(2,"b").set(3,"c");
console.log(map1);