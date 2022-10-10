var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phnInput = document.getElementById('phone');
var dateInput = document.getElementById('date');
var timeInput = document.getElementById('time');

addEventListener('submit', function() {
let user = {
        name: nameInput.value,
        email: emailInput.value,
        phn: phnInput.value,
        date: dateInput.value,
        time: timeInput.value
}

let user_info = JSON.stringify(user);

        this.localStorage.setItem("User", user_info);
 });