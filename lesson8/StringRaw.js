console.log(String.raw `One\tTwo\nThree`);

function rawTag(strings,...values){
	let result = "";
	for(let i = 0;i < strings.length;i++){
		result += strings.raw[i];
	}
	return result;
}
console.log(rawTag`One\tTwo\nThree`);