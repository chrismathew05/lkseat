document.getElementById('lookupBtn').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    if (firstName && lastName) {
        try {
            const fullName = firstName.toUpperCase().trim() + " " + lastName.toUpperCase().trim();
            console.log(fullName);
            const seatNum = SEATING[fullName] ?? "No seat number found for the provided name."

            // const lines = [
            //     "Kevin Koshy,Top Table",
            //     "Lynn Avedikian,Top Table" 
            // ];
            // for (const line of lines) {
            //     const [fullName, seatNum] = line.split(',');
            //     const [csvFirstName, csvLastName] = fullName.split(' ');

            //     if (csvFirstName.trim() === firstName && csvLastName.trim() === lastName) {
            //         document.getElementById('result').textContent = `Table Number: ${seatNum}`;
            //         return;
            //     }
            // }

            document.getElementById('result').textContent = seatNum;
        } catch (error) {
            document.getElementById('result').textContent = 'An error occurred while fetching the data.';
        }
    } else {
        document.getElementById('result').textContent = 'Please enter both first name and last name.';
    }
});
