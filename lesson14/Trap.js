let obj = {a:100};
let trapLogic = {
		get(targetObj,key,proxy){
			console.log(`key : ${key}`);
			// targetObj ในตัวอย่างนี้คือ obj
			// proxy ในตัวอย่างนี้คือ proxyObj
			
			return Reflect.get(targetObj,key);
			// เนื่องจาก Reflect  บางเว็บเบลาเซอร์อาจไม่ทำงาน จึงอาจเขียนเป็นแบบนี้แทนก็ได้
			// return targetObj[key];
		}
};
let proxyObj = new Proxy(obj,trapLogic);
console.log(proxyObj);
console.log(obj.a);