let font = {
		color : "red",
		size : 200
};

// กำหนดตัวแปร ด้วยสตรัคเตอริง จะเสมือนประกาศแบบนี้
// let fontColor = font.color,font.size;
let{color:fontColor,size:fontSize} = font;
// จะประกาศเป็นแบบ var หรือ const ก็ทำได้เช่นกัน
// var {color:fontColor,size:fontSize} = font;
// const {color:fontColor,size,fontSize} = font;

console.log(fontColor);
console.log(fontSize);

console.log("==========================");
let font1 = {
		color : "red",
		size: 200
};
// จะเสมือนประกาศแบบนี้
// let color = font.color,size = font.size;
let{color,size}=font1; // กำหนดค่าให้กับตัวแปร ด้วยวิธีดีสตรัคเตอริงแบบย่อ
console.log(color);
console.log(size);

console.log("==========================");
let font2 = {
		color1: "red",
		size1: 200,
		text1 :{
			name : "thai"
		}
};
// จะเสมือนประกาศแบบนี้
// let color = font.color,size = font.size,name = font.text.name;
let {color1,size1,text1:{name}} = font2;
console.log(color1,size1,name);
