let iterator = generator();
iterator.next(); // เริ่มทำงาน

function *generator(){
	for(let i = 0;i<5;i++){
		let result = yield runService(i);
		console.log("Message:",result);
	}
}

function runService(data){
	function asynCode(resolve,reject){
		// การทำงานอื่นๆ
		setTimeout(function(){
			resolve(data);
		},1000);
	}
	
	let promise = new Promise(asynCode);
	promise.then(function(value){
		let result = "service "+value + " is success";
		iterator.next(result);
	});
	
}