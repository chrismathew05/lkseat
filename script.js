document.getElementById('lookupBtn').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (firstName && lastName) {
        try {
            const fullName = firstName.toUpperCase().trim() + " " + lastName.toUpperCase().trim();
            console.log(fullName);
            const seatNum = SEATING[fullName] ?? "No seat number found for the provided name."

            document.getElementById('result').textContent = seatNum;
        } catch (error) {
            document.getElementById('result').textContent = 'An error occurred while fetching the data.';
        }
    } else {
        document.getElementById('result').textContent = 'Please enter both first name and last name.';
    }
});
