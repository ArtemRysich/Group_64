// const buttonAdd = document.querySelector('.add')
// console.log(buttonAdd);


// // https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener

// const input = document.querySelector('.js-input');
// const buttonAdd = document.querySelector('.add')
// buttonAdd.addEventListener('click',onClick,{once : true})
// input.addEventListener('input', onInput)
// function onInput(evt){
//     const {value} = evt.currentTarget;
//     console.log(value);
//     if(value.length >= 7){
//         buttonAdd.removeAttribute('disabled')
//     }

// }


// function onClick(evt) {
//     console.log(evt.currentTarget);
//     // evt.currentTarget.setAttribute('disabled', true)
//     evt.currentTarget.setAttribute('hidden', true)
//     const markup = `<h1>Hello World</h1>`
//     document.body.insertAdjacentHTML('beforeend',markup)
//     // console.log(evt.target);
// }

// const form = document.querySelector('.js-form');
// form.addEventListener('submit', onSubmit)

// function onSubmit(evt){
//     evt.preventDefault()
//     const data = new FormData(evt.currentTarget);
//     console.log(data);
//     data.forEach(value => console.log(value))
//     // const {gender, userName} = evt.currentTarget.elements;
//     // console.log('userName',userName.value);
//     // console.log('gender',gender.value);
//     //     const {gender : {value : gender}, userName : {value: userName}} = evt.currentTarget.elements;
// }


// Перева до 20.50


// document.addEventListener('keydown', onPress)
// const box = document.querySelector('.box')

// let step = 0;

// function onPress(evt) {
//     console.log(evt);
//     if (evt.code === 'ArrowLeft') {
//         step -= 50
//         box.style.marginLeft =`${step}px`;
//     } else if (evt.code === 'ArrowRight') {
//         step += 50;
//         box.style.marginLeft = `${step}px`;
//     }
// }


// document.addEventListener('keydown', onEscape)

// function onEscape(evt) {

//     if (evt.code === 'Escape') {
//       //some value
//       document.removeEventListener('keydown', onEscape)
//     }
// }



// const content = document.querySelector('.content');
// let player = 'X';
// let stepX = [];
// let stepO = [];
// const win = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7]

// ]
// let markup = ''

// for (let i = 1; i <= 9; i += 1) {
//     markup += `<div class="item" data-id="${i}"></div>`
// }

// content.insertAdjacentHTML('beforeend', markup)
// content.addEventListener('click', onClick)

// function onClick(evt) {
//     // '' => !false => true
//     if (!evt.target.textContent) {
//         const id = Number(evt.target.dataset.id)
//         if (player === 'X') {
//             stepX.push(id)
//             const isWinner = checkWinner(stepX)
//             if (isWinner) {
//                 console.log(`${player} is Winner 😎`);
//                 reset();
//                 return; 
//             }

//         } else {
//             stepO.push(id)
//             const isWinner = checkWinner(stepO)
//             if (isWinner) {
//                 console.log(`${player} is Winner 😎`);
//                 reset()
//                 return; 
//             }
//         }
//         evt.target.textContent = player;
//         player = player === 'X' ? 'O' : 'X'
//     }

// }

// function checkWinner(arr) {
//     const result = win.some(values => values.every(value => arr.includes(value)));
//     return result
// }

// function reset() {
//     content.innerHTML = markup;
//     player = "X";
//     stepX = [];
//     stepO = [];
// }




// Example 4 - Нотатки не працює,підскажіть,засидівся на тих задачах і відчуваю тупим себе
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     };
//     constructor(arr) {
//         this.items = arr;
//     }
//     addNote(note) {
//         const inArray = this.items.some(item => item.text === note.text)
//         console.log(inArray);
//         if(!inArray){
//             this.items.push(note);
//         }
//         console.log(this.items);
//         // console.log(this.notes.some(item => item.name === note.name));
//         // if(!this.notes)
//         // if (!this.items.includes(note)) {
//         //     this.items.push(note);
//         // }
//     }
//     // removeNote(text) {
//     //     if (this.items.includes(text)) {
//     //         const idx = this.items.indexOf(text);
//     //         this.items.splice(idx, 1);
//     //     }
//     // }
//     // updatePriority(text, newPriority) {
//     //     if (this.items.includes(text)) {
//     //         this.items.priority = newPriority;
//     //     }
//     // }
// }

// // Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// const myNotes = new Notes([]);

// myNotes.addNote({
//     text: 'Моя перша замітка',
//     priority: Notes.Priority.LOW
// });
// myNotes.addNote({
//     text: 'Моя перша замітка',
//     priority: Notes.Priority.LOW
// });
// myNotes.addNote({
//     text: 'Моя перша замітка',
//     priority: Notes.Priority.LOW
// });
// // console.log(myNotes.items);

// myNotes.addNote({
//     text: 'Моя друга замітка',
//     priority: Notes.Priority.NORMAL,
// });
// // console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);


// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.
// class Toggle {
//     constructor({isOpen}){
//         this.on = isOpen;
//     }
//     toggle(){
//         if(this.on){
//             this.on = false
//         }else{
//             this.on = true
//         }
//     }
// }
// const firstToggle = new Toggle({ isOpen: true });
// console.log('firstToggle',firstToggle);
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);    
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');



const value = 6;
console.log(value%2); // 0 => !false => true
if(!(value%2)){
    console.log('Парне');
}else{
    console.log('Not Парне');
}
