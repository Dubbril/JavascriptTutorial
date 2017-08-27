var array = [1,2,3,4];
array.forEach((value,index,arr)=>arr[index]=value*2);
console.log(array);

// จะเสมือนใช้ฟังก์ชันคอลแบ็คแบบปกติ
/*var array = [1,2,3,4];
array.forEach(function(value,index,arr){
	return arr[index] = value *2 ;
});
console.log(array);*/