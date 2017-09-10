function readJSONFile(fileName){
	function asynCode(resolve,reject){
		let fs = require("fs");
		fs.readFile(fileName,function(err,text){
			if(err){
				reject(err.message);
			}else{
				let obj = JSON.parse(text);
				let json = JSON.stringify(obj,null,2);
				resolve(json);
			}
		});
	}
	return new Promise(asynCode);
}

let reader = readJSONFile("json.txt");
console.log("Read a file");

function handle(value){console.log(value);}
function errorHandle(errMsg){console.log("Error message:",errMsg);}
reader.then(handle,errorHandle);