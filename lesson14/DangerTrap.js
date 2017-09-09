let obj = {a:100};
let trapLogic = {
		getOwnPropertyDescriptor(targetObj,key){
			console.log(`getOwnPropertyDescriptor : ${key}`);
			return Reflect.getOwnPropertyDescriptor(targetObj,key);
		},
		defineProperty(targetObj,key,descriptor){
			console.log(`definePropery : ${key}`);
			return Reflect.defineProperty(targetObj,key,descriptor);
		}
		/*,set(targetObj,key,value,proxy){
			console.log(`set property : ${kdy} = ${value}`);
			return Reflect.set(targetObj,key,value);
		}*/
};

let proxyObj = new Proxy(obj,trapLogic);
proxyObj.a = 100;
