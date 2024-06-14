var text = prompt("Type Here: ")

var textLen = text.length
var maxLen = 240

var textLeft = maxLen - textLen

alert("You have " + textLeft + " characters left!")

// To cut off after the limit has reached, use the slice command, so it would be text.slice(0,240)