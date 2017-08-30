let div = `<div>
	<h1>Hello World</h1>
</div>`;
console.log(div);

console.log("\n============================");
console.log("หากเขียนแบบธรรมดาจะทำให้ยุ่งยาก");
console.log("============================\n");

let div1 = "<div>\n\t<h1>Hello World</h1>\n</div>";
console.log(div1);

console.log("\n============================");
console.log("แม้ไม่ใช้เครื่องหมาย + สตริง ก็ทำให้ยุ่งยากอยู่ดี");
console.log("============================\n");

let div2 = "<div>\n"+
"	<h1>Hello World</h1>\n"+
"</div>";
console.log(div2);

console.log("\n============================");
console.log("ถึงแม้จะใช้ความสามารถของอาร์เรย์ซึ่งมีฟังก์ชัน join() ก็ยังยุ่งยากอยู่ดี");
console.log("============================\n");

let div3 = ["<div>","\t<h1>Hello World</h1>","</div>"].join("\n");
console.log(div3);

console.log("\n============================");
console.log("หรือจะใช้เครื่องหมาย \ ต่อท้ายสตริง เพื่อใช้ Enter ก็ยังยุ่งยากอยู่ดี");
console.log("============================\n");

let div4 = "<div>\
<h1>Hello World</h1>\
</div>";
console.log(div4);