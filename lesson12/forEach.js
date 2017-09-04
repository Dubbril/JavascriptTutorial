function log(value1, value2, setObj) {
	console.log(`[${value1}] = ${value2}`);
}
let set = new Set([ "a", "b", "c" ]);
set.forEach(log, set);
