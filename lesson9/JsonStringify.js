let obj = {
		[Symbol("example")] : "100",
		"bar" : "200"
}
// จะได้เป็นสตริงที่เขียนอยู่ในรูปของ JSON
console.log(JSON.stringify(obj));