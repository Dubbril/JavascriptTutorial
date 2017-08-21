console.log(/Hello+/.test("Hellooooo"));
console.log(new RegExp("Hello+").test("Hellooooo"));

console.log("================");
var result = /(foo).(bar)/.exec("0123foo_bar");
console.log(result.index);
console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result.input);