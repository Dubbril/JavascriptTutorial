let obj = {foo:1};
let trapLogic = {
		set(targetObj,key,value,proxy){ // กำหนดค่าใหักับพร็อกซี่
			if(Reflect.has(targetObj,key)){
				return Reflect.set(targetObj,key,value);
			}else{
				throw `Cat't write property : ${key}`;
			}
		},
		get(targetObj,key,proxy){ // อ่านเพร็อพเพอร์ดี
			if(Reflect.has(targetObj,key)){
				return Reflect.get(targetObj,key);
			}else{
				throw `Can't read property: ${key}`;
			}
		},
		deletProperty(targetObj,key){ // ลบพร็อพเพอร์ตี
			if(Reflect.has(targetObj,key)){
				return Reflect.deleteProperty(targetObj,key);
			}else{
				throw `Can't delete property: ${key}`;
			}
		}
		
}

let proxyObj = new Proxy(obj,trapLogic);

proxyObj.foo = 100;
console.log(proxyObj.foo);
// console.log(delete proxyOjb.foo);

proxyObj.a = 1;
console.log(proxyObj.b);
delete proxyObj.c;