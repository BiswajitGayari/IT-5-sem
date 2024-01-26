var initialDeposit = 1000;
var interestRate = 0.05;

function calculateAccountBalance() {
    // Get the input value
    var years = parseInt(document.getElementById('years').value);

    // Check if the input is valid
    if (isNaN(years) || years < 0) {
        alert("Please enter a valid number of years.");
        return;
    }

    // Calculate the account balance for each year
    var accountBalance = initialDeposit;
    for (var i = 1; i <= years; i++) {
        accountBalance += accountBalance * interestRate;
        alert("Year " + i + ": Rs " + accountBalance.toFixed(2));
    }
}

function analyzeNumbers() {
    // Get the input values
    var input = prompt("Enter a list of numbers separated by spaces:");

    // Convert the input string to an array of numbers
    var numbers = input.split(' ').map(Number);

    // Check if the input is valid
    if (numbers.length === 0 || !numbers.every(isValidNumber)) {
        alert("Please enter a valid list of numbers.");
        return;
    }

    // Initialize counters
    var positiveCount = 0;
    var negativeCount = 0;
    var zeroCount = 0;

    // Analyze the numbers
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveCount++;
        } else if (numbers[i] < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        }
    }

    // Show the result using alert
    alert("Positive Numbers: " + positiveCount + "\nNegative Numbers: " + negativeCount + "\nZeroes: " + zeroCount);
}

function isValidNumber(value) {
    return !isNaN(value);
}
