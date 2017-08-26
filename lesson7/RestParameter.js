function iterateItem(item,...last){
	console.log(item);
	let result  = 0;
	let len = last.length;
	for(let i = 0;i<len;i++){
		result += last[i];
	}
	console.log(result);
}
iterateItem(1,1,2,3,4); 

console.log("\n\n============================");
console.log("ปรับปรุง code ใหม่");
console.log("============================");
function iterateItem1(...last){
	console.log(last[0]);
	let result  = 0;
	let len = last.length;
	for(let i = 1;i<len;i++){
		result += last[i];
	}
	console.log(result);
}
iterateItem1(1,1,2,3,4);