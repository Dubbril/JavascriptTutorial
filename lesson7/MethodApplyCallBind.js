let sum = (val1,val2) => console.log(val1+val2);
sum.apply(null,[5,5]);
sum.call(null,5,5);
let resultSum = sum.bind(null,5,5);
resultSum();

console.log("\n\n============================");
console.log("this คือค่าอาร์กิวเมนต์ตัวแรกของ 3 เมธอดดังกล่าว this จึงไม่สามารถเปลี่ยนแปลงค่าได้");
console.log("============================");

let objA = {value: "access objA"};
let objB = {
		value: "access objB",
		myFunction(){
			console.log("this.value in myFunction:",this.value);
			
			// this ในฟังก์ชันลูกศร จะไม่เห็นเหมือนกับที่  myFunction มองเห็น
			let arrowFunc = () => console.log("Arrow function:",this.value);
			
			let func = function(){ // this ในฟังก์ชันปกติ สามารถเปลี่ยนไปชี้ออบเจ็กต์ตัวอื่นได้
				console.log("Normal function:",this.value);
			}
			
			arrowFunc.call(objA); // บรรทัด a  ไม่สามารถเปลี่ยนค่า this ได้
			func.call(objA);	 // บรรทัด b สามารถเปลี่ยนค่า this ให้ชี้ไปยังออบเจ็กต์ objA ได้
		}
}
objB.myFunction(); // บรรทัด c
objB.myFunction.call(objA); // บรรทัด d