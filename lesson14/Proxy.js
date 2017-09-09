let obj = {a:100};
let handler = {};
let proxyObj = new Proxy(obj,handler);
console.log(proxyObj.a);
console.log(obj.a);

// ห่ออาร์เรย์
let proxyArray = new Proxy([1,2,3],{});
console.log(proxyArray[1]);
console.log(...proxyArray);

// ห่อฟังก์ชันลูกศร
let  proxyFunc = new Proxy(() => console.log("myFunction"),{});
proxyFunc();

// ห่อพร็อกซี่
let proxyObj1 = new Proxy(proxyArray,{});
console.log(...proxyObj1);

// ห่อพร็อกซี่
let proxyObj2 = new Proxy(proxyFunc,{});
proxyObj2();