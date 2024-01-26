function generateTable() {
    // Create a table element
    var table = "<table><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

    // Loop through numbers from 5 to 15
    for (var i = 5; i <= 15; i++) {
        // Calculate square and cube
        var square = i * i;
        var cube = i * i * i;

        // Append the row to the table
        table += "<tr><td>" + i + "</td><td>" + square + "</td><td>" + cube + "</td></tr>";
    }

    // Close the table tag
    table += "</table>";

    // Show the table using alert
    alert(table);
}
