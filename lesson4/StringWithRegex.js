console.log("012Hellooooooo".search(/Hello+/));

var result = "Helloooooooo Hello".match(/Hello+/g);
console.log(result);
console.log(result.length);

var str = "Hellooooo".replace(/Hello+/, "Bye");
console.log(str);

var split = "1,2,3".split(/,/);
console.log(split);