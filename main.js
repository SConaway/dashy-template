import './style.css';

// handle header_[date, greet]
document.getElementById('header_date').innerHTML =
    new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

let currentTime = new Date();
let greet = Math.floor(currentTime.getHours() / 6);
switch (greet) {
    case 0:
        document.getElementById('header_greet').innerHTML = 'Good night!';
        break;
    case 1:
        document.getElementById('header_greet').innerHTML = 'Good morning!';
        break;
    case 2:
        document.getElementById('header_greet').innerHTML = 'Good afternoon!';
        break;
    case 3:
        document.getElementById('header_greet').innerHTML = 'Good evening!';
        break;
}
