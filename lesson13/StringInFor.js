let str = "ab你";
console.log(str.length);

for(let i=0;i<str.length;i++){
	console.log(str[i]);
}

for(let i of str){
	console.log(i);
}