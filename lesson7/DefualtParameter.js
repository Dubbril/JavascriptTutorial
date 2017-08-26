function sendMessage(ipaddress,message = "Hello",callback = function(){}){
	// ถ้าไม่ส่งอาร์กิวเมนต์มาให้พารามิเตอร์ message จะมีค่าเป็น "Hello"
	// ถ้าไม่ส่งอาร์กิวเมนต์มาให้พารามิเตอร์ message จะมี่ค่าเป็น callback
	// จะได้เป็นฟังก์ชันว่างที่ไม่ได้ทำงานอะไรเลย
	// แต่จะรีเทิร์นค่าเป็น undefined
	console.log(ipaddress,message,callback());
}

sendMessage("127.0.0.1");
sendMessage("127.0.0.1","Good bye!");
sendMessage("127.0.0.1","Good bye!",function(){return "toDoSomething";});


function sendMessage1(ipaddress,message = "Hello",callback){
	console.log(ipaddress,message,typeof callback);
}
console.log("\n\n============================");
console.log("การส่งค่า null และ undefined");
console.log("============================");
sendMessage1("127.0.0.1");

console.log("\n\n============================");
console.log("การวางตำแหน่งพารามิเตอร์แบบ default ควรวางไว้ตำแหน่งท้ายสุด ถ้าไม่อย่างนั้นจากตัวอย่างต้องระบุ argumnet ตัวที่ 2 ทุกครั้ง");
console.log("============================");
sendMessage1("127.0.0.1","Hello",function(){});
sendMessage1("127.0.0.1",null,function(){});
sendMessage1("127.0.0.1",undefined,function(){});


console.log("\n\n============================");
console.log("ปรับปรุง code ใหม่");
console.log("============================");
function sendMessage2(ipaddress,callback,message = "Hello"){
	console.log(ipaddress,message,typeof callback);
}
sendMessage2("127.0.0.1",function(){});
