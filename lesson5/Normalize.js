function toCodePoint(str) {
	var concat = "";
	for (var i = 0; i < str.length; i++) {
		concat += "0x" + str.codePointAt(i).toString(16) + " ";
	}
	console.log(concat);
}

var str = "\u{1E9B}\u{0373}";

var s1 = str.normalize("NFC");
toCodePoint(s1);

var s2 = str.normalize("NFKC");
toCodePoint(s2);

var s3 = str.normalize("NFKD");
toCodePoint(s3);