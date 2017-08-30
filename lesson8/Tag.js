function divTag(Strings, ...values){
	let result = "";
	for(let i = 0;i<values.length;i++){
		result+=Strings[i];
		result+=values[i];
	}
	if(values.length < Strings.length){
		result += Strings[values.length];
	}
	
	return `<div>${result}</div>`;
}
let n = 1,a = 3,b = 6;
console.log(divTag`${n}) Hello World : ${a * b} items`);