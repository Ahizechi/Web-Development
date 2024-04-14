var guestlist = ["Alice", "Bob", "Charlie", "Diana", "Edward", "Fiona", "George", "Hannah", "Ian"];

var name = prompt("Enter your name: ");

if (guestlist.includes(name)) {
    console.log("You are on the list.")
} else {
    console.log("You are not on the list.")
}