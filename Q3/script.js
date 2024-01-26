function calculateFactorial() {
    // Get the input value
    var number = parseInt(document.getElementById('number').value);

    // Check if the input is valid
    if (isNaN(number) || number < 0) {
        alert("Please enter a non-negative integer.");
        return;
    }

    // Calculate the factorial
    var factorial = 1;
    for (var i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Show the result using alert
    alert("The factorial of " + number + " is: " + factorial);
}
