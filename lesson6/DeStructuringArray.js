let font = ["red","bold","thai"];
// กำหนดค่าให้กับตัวแปล ด้วยวิธีดีสตรัคเตอริง
// จะเสมือนประกาศตัวแปลแบบนี้
// let color = font[0],style = font[1];
let [color,style] =  font;
// จะประกาศตัวแปรเป็นแบบ var หรือ const ก็ได้เช่นกัน
// var [color,style] = font;
// const [color,style] = font;
console.log(color);
console.log(style);

//console.log("============================");
//let font1 = ["red","bold","thia"];
//let [ ,style1, ] = font1;
//console.log(style1);

console.log("\n\n============================");
console.log("การซ้อนของอาร์เรย์");
console.log("============================");
font2 = ["red",["200","thai"],"bold"];
let [color2,[size2,lang2],style2,option2] = font2;
console.log(color2);
console.log(color2 === font2[0]);

console.log(size2);
console.log(size2 === font2[1][0]);

console.log(lang2);
console.log(lang2===font[1][1]);

console.log(style);
console.log(style2 === font[2]);

console.log(option2);

console.log("\n\n============================");
console.log("ปรับปรุงวิธีเขียนใหม่");
console.log("============================");
let font3 = ["red",["200","thai"],"bold"];
let [color3,option3,style3] = font3;

console.log(color3,style3);
console.log(option3[0]);
console.log(option3[1]);
console.log(option3 === font3[1]);

console.log("\n\n============================");
console.log("ข้อควรระวัง");
console.log("============================");
let action = {
		save : true,
		undo : false
};
let save, undo;
({save,undo} = action);
console.log(save,undo);

console.log("\n\n============================");
console.log("ข้อควรระวัง แบบ array");
console.log("============================");
let font4 = ["red","bold"];
let color4,style4;
[color4,style4] = font4;
console.log(color4,style);






