for(let i of [1,5,10]){
	console.log(i);
}


// อาจเขียนเหมือนประโยคนี้

let iterator = [1,5,10][Symbol.iterator]();
let result;
while((result=iterator.next()) && result.done == false){
	let i = result.value;
	console.log(i);
}