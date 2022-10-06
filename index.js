var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phnInput = document.getElementById('phone');
var dateInput = document.getElementById('date');
var timeInput = document.getElementById('time');

addEventListener('submit', function() {
        alert( nameInput.value + ", " + emailInput.value + ", " + phnInput.value + ", " + dateInput.value + ", " + timeInput.value)
 });