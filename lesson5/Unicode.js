var a = "ABC";
console.log(a.length);
console.log(a.codePointAt(0));
console.log(a.codePointAt(1));
console.log(a.codePointAt(2));
console.log(a.codePointAt(3));

console.log("===========================");
var thai = "กขค";
console.log(thai.length);
console.log(thai.codePointAt(0).toString(16));
console.log(thai.codePointAt(1).toString(16));
console.log(thai.codePointAt(2).toString(16));

console.log("===========================");
console.log(String.fromCodePoint(42));
console.log(String.fromCodePoint(65, 66, 67));
console.log(String.fromCodePoint(0xe01, 0xe02, 0xe04));

// สามารถส่งค่าอาร์กิวเมนต์เป็นสตริง ที่เขียนด้วยตัวเลข ก็สามารถทำได้เช่นกัน
console.log(String.fromCodePoint("97", "98", "99"));
console.log(String.fromCodePoint("0xe07", "0xe08", "0xe09"));

console.log("===========================");
// String.fromCodePoint('_');
// String.fromCodePoint(Infinity);
// String.fromCodePoint(-1);
// String.fromCodePoint(NaN);

console.log("\u{e01}");
console.log("\u{e01}\u{e02}\u{e04}ABC");

console.log("\u0e01");

console.log("\u20BB7");
console.log("\u{20BB7}");

console.log("a".length);
console.log("ก".length);

var char = "𤭢";
console.log(char.length);

