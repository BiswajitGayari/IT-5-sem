function findLargest() {
  // Get the input values
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var num3 = parseFloat(document.getElementById('num3').value);

  // Check if the input is valid
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Please enter valid numbers.");
    return;
  }

  // Find the largest number
  var largest = Math.max(num1, num2, num3);

  // Show the result using alert
  alert("The largest number is
