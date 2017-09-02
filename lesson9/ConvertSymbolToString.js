let sym = Symbol("foo");
console.log(sym.toString());
console.log(String(sym));
new String(sym) // จะเกิด error