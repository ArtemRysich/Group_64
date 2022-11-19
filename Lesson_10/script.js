// const arr = [1,2,3];

// console.log(arr);



// const parent = {
//     name: "parent",
//     sayHello(){
//         console.log(`Hello i'm ${this.name} `);
//     },
//     test:{

//     }
// }

// const obj = Object.create(parent);
// // const copyObj = Object.assign(parent);
// const spredObj = {...parent};
// const parseObj = JSON.parse(JSON.stringify(parent))
// console.log(parseObj);
// spredObj.age = 27;
// console.log('spredObj',spredObj);
// console.log('obj',obj);
// console.log('copyObj',copyObj);
// copyObj.age = 27
// console.log('copyObj',copyObj);
// console.log('parent',parent);
// obj.name = "Artem"
// console.log(obj.sayHello());
// console.log(obj);


// const user = Object.create(obj)
// user.sayHello()
// console.log(user);
// console.log(user.years());


// let i = 0

// function foo() {
//     i += 1
//     if (i < 10) {
//         foo()
//     }
//     return i
// }
// console.log(foo());


// const obj = {}
// console.log(obj);
// function sayHello(){
//     console.log('hello it`s custom');
// }
// const str = 'hello'
// String.prototype.say = sayHello
// str.say()


// class User {
//     static counter = 0;
//     static addUser(){
//         // User.counter +=1 
//         this.counter +=1;
//         console.log( this.counter);
//     }
//     #email;
//     constructor(name = 'Initail value', password, email) {
//         this.#email = email;
//         this.name = name;
//         this.password = password;
//         User.addUser();
//     }
//     sayHello() {
//         console.log(`Hello I'm ${this.name}`);
//     }
//     createValue(value) {
//         this.value = value
//     }
//     #checkEmail(value){
//       const response = value.includes('@') && value.includes('.') && value.length > 10;
//       return response
//     }

//     get emailValue() {
//         console.log(this.#email);
//     }

//     set emailValue(newValue) {
//         if (this.#checkEmail(newValue)) {
//             this.#email = newValue;
//         } else {
//             alert('Invalid email 😢')
//         }
//     }

// }


// class Admin extends User{
//     constructor(name, password, email, secretPassword){
//         super(name, password, email)
//         this.secretPassword = secretPassword;
//     }
//     deleteUser(email){
//         console.log(email);
//     }
// }




// const artem = new User('Artem', 'qwerty');
// const dima = new Admin('Dima','1111', 'test@gmail.com', 'qwerty123');
// console.log(dima);
// console.log(artem.constructor.counter);
// const test = new User();
// const artem1 = new User('Artem', 'qwerty');
// const artem2 = new User('Artem', 'qwerty');
// const artem3 = new User('Artem', 'qwerty');
// const artem4 = new User('Artem', 'qwerty');
// const artem5 = new User('Artem', 'qwerty');
// const artem6 = new User('Artem', 'qwerty');
// // console.log(artem);
// console.log(dima);
// test.createValue(1234)
// console.log(test);
// dima.sayHello()


// const artem = new User('Artem', 'qwerty', 'test@gmail.com');
// console.log(artem.name);
// artem.name = 'Oleg'
// artem.emailValue
// artem.emailValue= 'asa';
// artem.emailValue = '1234asdfgfhkjl@gm.mm';
// artem.#checkEmail()
// console.log(artem);
// artem.#email = 'qwerty'
// console.log(artem.#email);




// Перерва до 21.00






// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// class User {
//     constructor({name,age,numberOfPosts,topics}){
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics
//     }
//     getInfo(){
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//     }
//     updatePostCount(value){
//         this.numberOfPosts += value;
//     }
// }

// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// // mango.updatePostCount(5);
// // console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(12);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts



// Оператор ~
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// class Storage{
//     constructor(arr){
//         this.items = arr;
//     }
//     get productItems(){
//         return this.items
//     }

//     set productItems(item){
//         if(!this.items.includes(item)){
//             this.items.push(item)
//         }
//     }
//     removeItem(item){
//         // if(this.items.includes(item)){
//         //     const idx = this.items.indexOf(item);
//         //     this.items.splice(idx, 1)
//         //     console.log(idx);
//         // }
//         const idx = this.items.indexOf(item);
//         // console.log(~0);
//         // console.log(~-1);
//         // console.log(!!~0);
//         // -(idx + 1) === ~idx
//         if(!!~idx){
//             this.items.splice(idx, 1)
//             console.log(idx);
//         }
//     } 
// }
// // Додай методи класу:

// // getItems() - повертає масив товарів.
// // addItem(item) - отримує новий товар і додає його до поточних.
// // removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// // const items = storage.productItems;
// // console.log (items); // [ '🍎', '🍋', '🍇', '🍑' ]

// // storage.productItems = '🍌';
// // storage.productItems = '🍋';
// // console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]



// console.log(1);
// console.log(!!1);
// console.log(Boolean(1));



// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.


// class User {
//     #login;
//     #email;
//     constructor({
//         email,
//         login
//     }={}) {
//         this.#email = email;
//         this.#login = login;
//     }

//     get email() {
//         return this.#email
//     }
//     set email(value) {
//         this.#email = value;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(value){
//         this.#login = value;
//     }

// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie





// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).


// class Notes{
//     static Priority = {
//           LOW: 'low',
//           NORMAL: 'normal',
//           HIGH: 'high'
//         }
//         constructor(arr){
//             this.items = arr;

//         }
//         addNote(note){

//         }
// }
// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// // console.log(myNotes.items);

// myNotes.addNote({
//   text: 'Моя друга замітка',
//   priority: Notes.Priority.NORMAL,
// });
// // console.log(myNotes.items);

// // myNotes.removeNote('Моя перша замітка');
// // console.log(myNotes.items);

// myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);



// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За замовчуванням значення властивості on повинно бути false.

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
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



function foo(param) {
    const value = 10;
    const value2 = 15

    function boo(someValue) {
        return value + value2 * someValue
    }

    if (param > 20) {
        return boo
    } else {
        return value
    }
}
console.log(foo(10));
console.log(foo(25)(11));
const result = foo(25);
console.log(result(11));












// https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/#basic-javascript
// __________________________________________ //
// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//     griffindor: [{
//             name: "Harry",
//             points: 17
//         },
//         {
//             name: "Hermiona",
//             points: 19
//         },
//         {
//             name: "Ron",
//             points: 14
//         },
//     ],
//     sliserin: [{
//             name: "Draco",
//             points: 17
//         },
//         {
//             name: "Goyl",
//             points: 14
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },
//     ],
// }






// -----------------------------------------TASK 2------------------------------------------//
// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [{
//     name: `Lika`,
//     language: `html`

// }, {
//     name: `Anton`,
//     language: `css`

// }, {
//     name: `Andriy`,
//     language: `js`

// }, {
//     name: `Vova`,
//     language: `html`

// }, {
//     name: `Alina`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Aleksandr`,
//     langunage: `html`

// }, {
//     name: `Taras`,
//     language: `css`

// }, {
//     name: `Ivan`,
//     language: `js`

// }, {
//     name: `Make`,
//     language: `html`

// }, ];




// -----------------------------------------TASK 3------------------------------------------//
// // Порахувати скільки ззаробив кожен  юзер
// // (функція приймає 2 параметри
// // 1 параметр масив
// // 2 параметр імя робітника
// // Функція повертає скільки він заробив (salary*month) )

// // Порахувати загальну суму заробітку всіх робітників()
// // (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// // const workers = [{
// //         name: 'Alex',
// //         salary: 3500,
// //         month: 12,
// //     },
// //     {
// //         name: 'Dima',
// //         salary: 2500,
// //         month: 9,
// //     },
// //     {
// //         name: 'Oleg',
// //         salary: 1500,
// //         month: 36,
// //     },
// // ];



// -----------------------------------------TASK 4------------------------------------------//
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [{ name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
//     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},
// ]



// -----------------------------------------TASK 5------------------------------------------//
// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

// const bankSystem = {
//     privat : 1000,
//     mono : 1500,

// }



// -----------------------------------------TASK 6------------------------------------------//
// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: [Alex]
//     },
// ] //Not found

// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];// Not found


// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ]; // Jhon


// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]