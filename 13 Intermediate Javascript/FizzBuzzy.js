var number = 0;

while (number < 100) {
    number++;
    var output = "";  // Initialize output as an empty string

    if (number % 3 == 0 && number % 5 == 0) {
        output = "FizzBuzz";
    } else if (number % 3 == 0) {
        output = "Fizz";
    } else if (number % 5 == 0) {
        output = "Buzz";
    } else {
        output = number;  // If none of the conditions are met, set output to the number
    }

    console.log(output);  // Print the output
}
