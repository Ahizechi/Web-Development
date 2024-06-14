function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
        var maxAge = 90;
        var diffAge = maxAge - age;
        var daysLeft = diffAge * 365;
        var weeksLeft = diffAge * 52;
        var monthsLeft = diffAge * 12;
        
        console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
        
        
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(56)
    