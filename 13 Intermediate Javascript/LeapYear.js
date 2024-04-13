function isLeap(year) {
    /**************Don't change the code above****************/    
    
    //Write your code here.
    
    var remYear1 = year % 4;
    var remYear2 = year % 100;
    var remYear3 = year % 400;
    
    if (remYear1 === 0) { // If year is divisible by 4
        if (remYear2 !== 0) { // And not divisible by 100
            console.log("Leap year.");
        } else { // If year is divisible by 100
            if (remYear3 === 0) { // And also divisible by 400
                console.log("Leap year.");
            } else { // Divisible by 100, but not by 400
                console.log("Not leap year.");
            }
        }
    } else { // Not divisible by 4
        console.log("Not leap year.");
    }
    
    /**************Don't change the code below****************/
}

isLeap(1948);
isLeap(2020);
