function log(value,key,mapObj){
	console.log(`[${key}] = ${value}`);
}

let map = new Map([[1,"a"],[2,"b"]]);
map.forEach(log,map); // ระบุค่าอาร์กิวเมนต์ตัวที่ 2 เป็น แม็พ