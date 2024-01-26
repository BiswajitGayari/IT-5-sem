function calculateSumAndAverage() {
    // Get the input value
    var input = document.getElementById('numbers').value;

    // Convert the input string to an array of numbers
    var numbers = input.split(' ').map(Number);

    // Check if the input is valid
    if (numbers.length === 0 || !numbers.every(isValidPositiveNumber)) {
        alert("Please enter a valid list of positive numbers terminated by 0.");
        return;
    }

    // Calculate the sum and average
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    var average = sum / numbers.length;

    // Show the result using alert
    alert("Sum: " + sum + "\nAverage: " + average.toFixed(2));
}

function isValidPositiveNumber(value) {
    return !isNaN(value) && value >= 0;
}
