let list = document.getElementById('full-names');

for (let key in SEATING) {
    let option = document.createElement("option");
    option.value = key;
    list.appendChild(option);
}


document.getElementById('lookupBtn').addEventListener('click', function () {
    let fullName = document.getElementById('fullName').value;

    if (fullName) {
        try {
            fullName = fullName.toUpperCase().trim();
            const seatNum = SEATING[fullName] ?? "No table found! Please check the name entered."

            document.getElementById('result').textContent = seatNum;
        } catch (error) {
            document.getElementById('result').textContent = 'An error occurred while fetching the data.';
        }
    } else {
        document.getElementById('result').textContent = 'Please enter your full name.';
    }
});
