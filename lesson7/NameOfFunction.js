function cleanRoom() {

}
console.log(cleanRoom.name);

let cleanToilet = function() {

}
console.log(cleanToilet.name);

let cleanNewToilet = function clearnOldToilet() {

}
console.log(cleanNewToilet.name); // จะได้ชื่อ clearnOldToilet

var room = {
	closeRoom : function() {

	}
}

console.log(room.closeRoom.name);

let cleanToilet1 = function() {

}
console.log(cleanToilet1.bind().name);

let myFunction = new Function();
console.log(myFunction.name);