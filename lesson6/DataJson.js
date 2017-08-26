// เป็นข้อมูลแบบ json ซึ่งเขียนด้วยเท็มเพลตสตริง (บทที่ 8)
let jsonText = '{"file" : "index.html", "menu" : [{"value" : "New", "onclick" : "createDoc" }, { "value" : "Option", "onclick" : "openDoc"} ]}';
let jsonObj = JSON.parse(jsonText);
console.log(jsonObj);

let {file,menu:[menu1,menu2]} = jsonObj;
console.log(file);
console.log(menu1.value);
console.log(menu1.onclick);
console.log(menu2.value);
console.log(menu2.onclick);