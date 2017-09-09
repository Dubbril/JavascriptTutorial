let genIterator = function * (item){ // นิพจน์เจเนอเรเตอร์
	for(i=0;i<item.length;i++){
		yield item[i];
	}
}

for(let i of genIterator([1,5,10])){
	console.log(i);
}