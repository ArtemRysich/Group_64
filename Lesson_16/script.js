const content = document.querySelector('.content');
const KEY_X = 'keyX';
const KEY_O = 'keyO';
const CURRENT_PLAYER = "player";
let player = localStorage.getItem(CURRENT_PLAYER) || 'X';
let stepX = JSON.parse(localStorage.getItem(KEY_X)) || [];
let stepO = JSON.parse(localStorage.getItem(KEY_O)) ?? [];
const win = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]

]
let markup = ''

for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`
}

content.insertAdjacentHTML('beforeend', markup)
content.addEventListener('click', onClick)

function onClick(evt) {
    // '' => !false => true
    if (!evt.target.textContent) {
        const id = Number(evt.target.dataset.id)
        if (player === 'X') {
            stepX.push(id)
            localStorage.setItem(KEY_X, JSON.stringify(stepX))
            const isWinner = checkWinner(stepX)
            evt.target.textContent = player;
            if (isWinner) {
                console.log(`${player} is Winner 😎`);

                setTimeout(() => {
                    reset();
                },500)
                return;
            }

        } else {
            stepO.push(id)
            localStorage.setItem(KEY_O, JSON.stringify(stepO))
            const isWinner = checkWinner(stepO)
            evt.target.textContent = player;
            if (isWinner) {
                console.log(`${player} is Winner 😎`);

                setTimeout(() => {
                    reset();
                },500)
                return;
            }
        }

        player = player === 'X' ? 'O' : 'X';
        localStorage.setItem(CURRENT_PLAYER, player)
    }

}


function checkWinner(arr) {
    const result = win.some(values => values.every(value => arr.includes(value)));
    return result
}

function reset() {
    content.innerHTML = markup;
    // localStorage.removeItem(KEY_X);
    localStorage.clear()
    player = "X";
    stepX = [];
    stepO = [];
}

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function () {
    try {
        [...content.children].forEach(item => {
            const id = Number(item.dataset.id)
            if (stepX.includes(id)) {
                item.textContent = "X"
            } else if (stepO.includes(id)) {
                item.textContent = "O"
            }
        })

    } catch (e) {
        console.log('localStorage empty');
    }

})()



// const user = [1,2,3,4]
// // console.log('before',user);
// // const jsonValue = JSON.stringify(user)
// // console.log('after',jsonValue);
// // console.log('parse', JSON.parse(jsonValue));

// localStorage.setItem('test', JSON.stringify(user))
// const response = localStorage.getItem('test')

// console.log(JSON.parse(response));



// const setLocal = document.querySelector('.set-local')
// const getLocal = document.querySelector('.get-local')
// const setSession = document.querySelector('.set-session')
// const getSession = document.querySelector('.get-session')

// setLocal.addEventListener('click', onSetLocal)
// getLocal.addEventListener('click', onGetLocal)

// function onSetLocal() {
//     localStorage.setItem('localStorage', 'localStorage')
// }

// function onGetLocal() {
//     try{
//         const response = localStorage.getItem('localStorage');
//         const arr = response.split('')
//         console.log(arr);
//     }catch(e){
//         console.error(e);
//     }finally{
//         console.log('finally');
//     }
//     Оператор АБО || 
// ""
// 0
// null
// undefined 
// NaN
// false


// Оператор ??
// null
// undefined

//     const response = localStorage.getItem('localStorage') ?? '';
//     const arr = response.split('')
//     console.log(arr);
//     console.log('hello world');
// }



// setSession.addEventListener('click', onSetSession)
// getSession.addEventListener('click', onGetSession)




// function onSetSession() {
//     sessionStorage.setItem('sessionStorage', 'sessionStorage')
// }

// function onGetSession() {

//     console.log(sessionStorage.getItem('sessionStorage'));
// }




// ТУТАРІАЛ ПО ДОКІ
// 1 Install - npm install simplelightbox
// 2 Як зробити import - import SimpleLightbox from "simplelightbox";
// 3 Перевірка console.log(SimpleLightbox)
// 4 Як використати Usage - new SimpleLightbox('.some-element a', { /* options */ });
// 5 Розбір опцій Options
// 6 Методи роботи з інстансом(екземпяром)