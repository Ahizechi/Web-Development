var numberOfBottles = 99;

while (numberOfBottles > 0) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
    
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    
    numberOfBottles--; // Decrement the number of bottles.
    
    // Here we need to check what the bottleWord should be for the next iteration.
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    } else if (numberOfBottles === 0) {
        bottleWord = "bottles"; // because "0 bottles" is plural
    }

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
