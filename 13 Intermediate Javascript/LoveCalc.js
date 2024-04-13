var name1 = prompt("Input the first name: ")
var name2 = prompt("Input the second name: ")

var calc = Math.random();
calc = calc * 100;
calc = Math.floor(calc) + 1;

if (calc > 50) {
    alert("You're in love (maybe)!")
} if (calc === 100) {
    alert("Awesome Sauce!")
} else {
    alert("Unlucky")
}

console.log("The love score for " + name1 + " and " + name2 + " is " + calc + "%!")