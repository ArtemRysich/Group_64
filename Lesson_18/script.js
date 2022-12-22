// Мікро процеси мають БІЛЬШИЙ пріорітет
// 1. Promise
// 2. Observer



// Макро процеси мають МЕНЬШИЙ пріорітет
// 1. setTimeout
// 2. setInterval
// 3. setImmediate
// 4. requestAnimationFrame



// console.log('1');

// setTimeout(() => {
//     console.log('2')
// }, 0)
// Promise.resolve("3").then(value => console.log(value))

// console.log('4');


// // Відповідь 1,4,3,2


// const promise = new Promise((res, rej) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if (random > 0.5) {
//             res('УРАААА 😎')
//         } else {
//             rej('Біда 😥')
//         }
//     }, 3000)
// })


// // console.log(promise);

// promise.then((value) => {
//         console.log(value)
//         return value + "🙈";
//     }, (err) => {
//         console.log(err)
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//     .finally(()=>{

//     })


// ПЕРЕВА ДО 21.35



// const container = document.querySelector('.js-container');
// const start = document.querySelector('.js-start')

// start.addEventListener('click', onClick);

// function onClick() {
//     const arr = [];
//     const childLength = container.children.length
//     for (let i = 0; i < childLength; i += 1) {
//         const item = container.children[i]
//         item.textContent = '';
//         createPromise("🤩", "🤐", i * 500)
//             .then(resp => {
//                 markField(item, resp);
//                 arr.push(1);
//             })
//             .catch(lost => {
//                 markField(item, lost);
//                 arr.push(0);
//             })
//             .finally(() => {
//                 setTimeout(() => {
//                     if (arr.length === childLength) {
//                         const isWinner = arr.every(item => item);

//                         if (isWinner) {
//                             alert('Winner 😎')
//                         } else {
//                             alert('Loser 😂')
//                         }
//                     }
//                 },100)
//             })
//     }

// }


// function markField(item, smile) {
//     item.textContent = smile;
// }


// function createPromise(win, lose, delay) {
//     const promise = new Promise((res, rej) => {
//         const random = Math.random()
//         setTimeout(() => {
//             if (random > 0.5) {
//                 res(win)
//             } else {
//                 rej(lose)
//             }
//         }, delay)
//     })
//     return promise;
// }


const promise = fetch('https://pokeapi.co/api/v2/pokemon/ditto');
promise
    .then(resp => {
        if (!resp.ok) {
            throw new Error('404')
        }
        return resp.json()
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));



console.log(promise);