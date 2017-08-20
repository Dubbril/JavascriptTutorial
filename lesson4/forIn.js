function Font() {
	this.color = "red";
	this.size = 200;
}

var coodinate = {
	x : 1,
	y : 1,
	z : 1
}
Font.prototype = Object.create(coodinate);
Font.prototype.myFunction = function() {
};

var font = new Font();
font[1] = "fontValue";

for ( var prop in font) {
	if (font.hasOwnProperty(prop)) {
		console.log("font." + prop, "=", font[prop]);
	}

}