var output = [];
var count = 1;

function FizzBuzz() {
    while (count <= 100) {
        var countRem = count % 3;
        var countRem5 = count % 5;

        if (countRem === 0 && countRem5 === 0) {
            output.push("FizzBuzz");
        } else if (countRem === 0) {
            output.push("Fizz");
        } else if (countRem5 === 0) {
            output.push("Buzz");
        } else {
            output.push(count);
        }
        count += 1; // Increment count to avoid infinite loop
    }
    console.log(output);
}

FizzBuzz(); // Call the function to execute FizzBuzz
