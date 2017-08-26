function sendMessage(ipaddress, message, callback) {
	message = message || "Hello";
	callback = callback || function() {
		return "callback";
	};
	console.log(ipaddress, message, callback());
}
// message กับ callback จะใช้ค่าดีฟอลต์
sendMessage("127.0.0.1");
sendMessage("127.0.0.1", 0, null);
sendMessage("127.0.0.1", NaN, '');

console.log("\n\n============================");
console.log("ปรับปรุง code ใหม่");
console.log("============================");
let value = 1;
function getMessage(){
	return "My_message_"+(value++);
}
function createCallback(){
	return function(){
		return "callback";
	};
}
function sendMessage1(message=getMessage(),callback=createCallback()){
	console.log(message,callback());
}
sendMessage1();
sendMessage1();


console.log("\n\n============================");
console.log("ปรับปรุง code ใหม่ อีกครั้ง");
console.log("============================");
function add(value){
	return value+10;
}

function calculate(a,b = add(a),c=a*b){
	console.log(a,b,c);
}
calculate(1,1,1);
calculate(10);
calculate(20);
calculate(30);