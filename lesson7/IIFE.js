// เทคนิค IIFE กับฟังก์ชันลูกศร
var printItem = ((item) => function(){
	console.log(item);
})("IIFE");

printItem();

// จะเสมือนใช้เทคนิค IIFE กับฟังก์ชันธรรมดา
/*var printItem = function(item){
	return function() {
		console.log(item);
	}
}("IIFE");
printItem();*/