
const wForm = document.querySelector('form');
const search = document.querySelector('input');
const loc = document.querySelector('#loc');
const we = document.querySelector('#we');

wForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit');

    const location = search.value;
    loc.textContent = "loading......";
    we.textContent = "";

    fetch('/weather?address=' + location)
    .then((res) => {
        res.json()
            .then((data) => {
                if (data.error) {
                    loc.textContent = data.error;
                } else {
                    we.textContent = 'Weather is currently ' + data.weather + ' Celsius';
                    loc.textContent = data.location;
                }
            });
    });

});
