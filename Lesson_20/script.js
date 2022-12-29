// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://www.udemy.com/?utm_source=aff-campaign&utm_medium=udemyads&LSNPUBID=0EOJOrTo2D4&ranMID=47901&ranEAID=0EOJOrTo2D4&ranSiteID=0EOJOrTo2D4-wJQvQPXqBlCZIps1gwWKbw
// https://the-one-api.dev/
const list = document.querySelector('.js-list');
const guard = document.querySelector('.js-guard');
// const load = document.querySelector('.js-load')

const KEY = "XJlq9OFMcHAy8pAQK7xj";
const BASE_URL = "https://the-one-api.dev/v2";
const options = {
    root : null,
    rootMargin: '300px',
    threshold: 1.0
}

const observer = new IntersectionObserver(onInfinityLoad, options)

let page = 1;

// load.addEventListener("click", onLoad)

function ringsApi(page = 1) {
    const options = {
        headers: {
            Authorization: `Bearer ${KEY}`
        }
    }
    return fetch(`${BASE_URL}/character?limit=300&page=${page}`,options)
        .then(resp => {
            if (!resp.ok) {
                throw new Error(resp.statusText)
            }

            return resp.json()
        })
}

ringsApi().then(data => {
    createMarkup(data.docs);
    observer.observe(guard);
    // load.hidden = false;
}).catch(err => console.error(err));



function createMarkup(arr) {
    const markup = arr.map(({
        name,
        race
    }) => `
    <li class="item">
        <h2>
            Name: ${name}
        </h2>
        <h3>
            Race: ${race}
        </h3>
    </li>`).join('');

    list.insertAdjacentHTML('beforeend', markup)
}
// let counter = 0
// document.addEventListener('scroll', ()=>{
//     counter+=1;
//     console.log("scroll", counter);
// })
localStorage.removeItem()
localStorage.clear()
// let counterObser = 0
function onInfinityLoad(entries, observer){

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            // counterObser+=1
            // console.log('observer',counterObser);
            page+=1
            ringsApi(page).then(data => {
                createMarkup(data.docs);
                if(data.page === data.pages){
                    observer.unobserve(guard)
                }
            })
        }
    })

}
// function onLoad() {
//     page += 1;
//     ringsApi(page).then(data => {
//         createMarkup(data.docs)
//         if (data.page === data.pages) {
//             load.hidden = true;
//         }
//     }).catch(err => console.error(err));
// }




// ПЕРЕРВА ДО 20.50