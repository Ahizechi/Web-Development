var name = prompt("Enter your name: ");

var firstLetter = name.slice(0,1);
var restLetter = name.slice(1);

var capitalFirst = firstLetter.toUpperCase();
var restLower = restLetter.toLowerCase();

alert("Hello, " + capitalFirst + restLower);