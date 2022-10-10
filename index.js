var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phnInput = document.getElementById('phone');
var dateInput = document.getElementById('date');
var timeInput = document.getElementById('time');

addEventListener('submit', function() {
        this.localStorage.setItem('name', nameInput.value);
        this.localStorage.setItem('email',emailInput.value);
        this.localStorage.setItem('phn_no',phnInput.value);
        this.localStorage.setItem('date',dateInput.value);
        this.localStorage.setItem('time',timeInput.value);
 });