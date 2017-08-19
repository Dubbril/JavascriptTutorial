//Getter
var font = {
		set color(param){
			this.col = param;
		}
};

font.color = "blue";
console.log(font.color);

console.log("================");
// Setter
var font1 = {
		col : "red",
		get color(){
			return this.col;
		}
};

console.log(font1.color);
font1.color = "blue"; // ไม่มีผลต่อไดๆ
console.log(font1.color);

console.log("================");
// Getter and Setter
var font3 = {
		col : "red",
		set color(param){
			this.col = param;
		},
		get color(){
			return this.col;
		}
};

console.log(font3.color);
font3.color = "blue";
console.log(font3.color);
























