// 94a040c94bab4dcabf9130808222712
// https://uk.wikipedia.org/wiki/SOAP
// https://www.postman.com/downloads/
// https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D1%96%D0%B2_%D1%81%D1%82%D0%B0%D0%BD%D1%83_HTTP#4xx_%D0%9A%D0%BB%D1%96%D1%94%D0%BD%D1%82%D1%81%D1%8C%D0%BA%D0%B0_%D0%BF%D0%BE%D0%BC%D0%B8%D0%BB%D0%BA%D0%B0

// https://www.weatherapi.com/docs/


// const response = fetch(`http://api.weatherapi.com/v1/forecast.json?key=94a040c94bab4dcabf9130808222712&q=Lviv&days=5`);
// response.then(resp => resp.json()).then(data => console.log(data))



const form = document.querySelector('.js-search');
const list = document.querySelector('.js-list')
const errorRequest = 'https://global.discourse-cdn.com/brave/original/3X/b/2/b25ce7b5ef1396e782cee4f7bbffaefd7f9d3b49.jpeg';
const emptyValue = 'https://www.shutterstock.com/image-illustration/no-value-red-rubber-stamp-260nw-426853699.jpg';

form.addEventListener('submit', onSearch);

function onSearch(evt) {
    evt.preventDefault();
    // console.dir(evt.currentTarget.elements);
    const {
        query,
        days
    } = evt.currentTarget.elements;

    if (query.value) {
        weatherApi(query.value, days.value)
            .then(data => createMarkup(data))
            .catch(err => createErrorMessage(err,errorRequest))
    }else{
        createErrorMessage("Empty search value", emptyValue)
    }
}

function weatherApi(city, days) {
    const BASE_URL = 'http://api.weatherapi.com/v1';
    const key = '94a040c94bab4dcabf9130808222712';
    return fetch(`${BASE_URL}/forecast.json?key=${key}&q=${city}&days=${days}`)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
}

function createMarkup({
    forecast: {
        forecastday: arr
    }
}) {
    const markup = arr.map(({
        date,
        day: {
            avgtemp_c: avg,
            condition: {
                text,
                icon
            }
        }
    }) => `<li>
    <img src="${icon}" alt="${text}">
    <h2>Дата: ${date}</h2>
    <h3>Температура: ${avg}</h3>
    <span>${text}</span>
    </li>`)

    list.innerHTML = markup.join('');
}

function createErrorMessage(err, img) {
    const markup = `<li>
    <h2>${err}</h2>
    <img src="${img}" alt="${err}" width="300">
</li>`

    list.innerHTML = markup;
}




// ПЕРЕРВА ДО "20.50"


