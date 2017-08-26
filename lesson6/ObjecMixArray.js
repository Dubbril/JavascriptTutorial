let action = {
		save : "success",
		undo : "none",
		option : ["move","stop","slow"]
};

// กำหนดให้กับตัวแปรด้วยวิธีดีสตรัคเตอริง
let {save,undo,option:[moveOption,stopOption]} = action;
console.log(save,undo,moveOption,stopOption);

console.log("\n\n============================");
console.log("ปรับปรุงเวิธีเขียนใหม่");
console.log("============================");
let action1 = {
		save1 : "success",
		undo1 : "nono",
		option1 : ["move","stop","option"]
};

let {save1,undo1,option1} = action1;

console.log(save,undo);
console.log(option1[0]);
console.log(option1[1]);
console.log(option1[2]);
console.log(option1 === action1.option1);













