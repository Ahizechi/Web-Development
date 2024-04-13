var name1 = prompt("Input the first name: ")
var name2 = prompt("Input the second name: ")

var calc = Math.random();
calc = calc * 100;
calc = Math.floor(calc) + 1;

console.log("The love score for " + name1 + " and " + name2 + " is " + calc + "%!")