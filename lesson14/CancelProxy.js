let trapLogic = {
		set(target,key,value,proxy){
			console.log(`set property: ${key} = ${value}`);
			return true;
		}
};

let {proxy:myProxy,revoke: revokeFunc} = Proxy.revocable({},trapLogic);
myProxy.a = 100;
revokeFunc();
console.log(myProxy.a);