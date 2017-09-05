let map = new Map();
map.set(1,"a");
map.set(2,"b");
map.set(3,"c");

console.log(map);
console.log(map.delete(1));
console.log(map);

map.clear();
console.log(map.size);