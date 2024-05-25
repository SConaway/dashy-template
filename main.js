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

function go(url) {
    // alert(url);
    window.location.href = url;
}

// on submit of search input,
// check if it looks like a URL
// redirect to google search
document.getElementById('searchform').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInput = document.getElementById('searchbar').value;
    console.log(searchInput);

    if (searchInput.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}/))
        if (searchInput.search("://") !== -1) go(searchInput);
        else go(`http://${searchInput}`);
    else go(`https://www.google.com/search?q=${searchInput}`);
    console.log('hello')
});
