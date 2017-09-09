class IteratorClass{
	*genIterator (item){
		for(let i=0;i<item.length;i++){
			yield item[i];
		}
	}
}

let myClass = new IteratorClass();
for(let i of myClass.genIterator([1,5,10])){
	console.log(i);
}