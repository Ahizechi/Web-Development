function bmiCalculator (weight, height) {
    
    var bmi = weight / (height * height);
    var interpretation = ""
    
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi +", so you are underweight."
    } if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi +", so you have a normal weight."
    } if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi +", so you are overweight."
    }
    return interpretation;
}

var weightNow = prompt("What is your weight? ")
var heightNow = prompt("How tall are you? ")

alert(bmiCalculator(parseFloat(weightNow), parseFloat(heightNow)));