//  Оператор ??
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

// 'use strict'
// function foo(){
//     console.log(this);
// }
// foo()

// const boo = function(){
//     console.log(this);
// }

// boo()
// prompt()



// const arrow = ()=>{
//     console.log(this);
// }
// arrow()
// const obj = {
//     name: 'USER',
//     myTHIS: this,
// arrow: ()=>{
//     console.log(this);
// }
// customArrow: {
//     inCustomArrow : 'Hello from custom arrow',
//     arrow: () => {
//         console.log(this);
//     }
// }
// custom: {
//     inCustom : 'Hello from custom',
//     foo() {
//         console.log(this);
//     }
// }
//     customForArrow: {
//     inCustom : 'Hello from custom for Arrow',
//     foo() {
//         console.log("declaration",this);
//         const arrow = () => {
//             console.log("in arrow function",this);
//         }
//         arrow()
//     }
// }
// }

// 1. Завжди дивимось на тип функції.
// 2. Якщо функці declaration або expresion this визначаємо тим хто нас викликав
// 3. Arrow бере батьківський this (але this може бути присутній лише в функції)



// obj.customForArrow.foo()
// obj.custom.foo();
// obj.arrow()
// obj.customArrow.arrow()


// console.log(window);

const user = {
    name: 'Artem',
    city: 'Lviv',
    sayHello(year, language) {
        // console.log(arguments);
        console.log(`Hello my name ${this.name}, from ${this.city}, I'm ${year}, study ${language}`);
    }
}
// user.sayHello(28, "HTML")



// const den = {
//     name:'Den',
//     city: "Zhutomyr"
// }

// const kate = {
//     name: "Kate",
//     city: "Uzhgorod"
// }


// const alex = {
//     name: "ALex",
//     city: "Kyiv"
// }




// const args = [18, "CSS"]
// user.sayHello.call(den,22,"JS")
// user.sayHello.apply(kate,[18, "CSS"])
// user.sayHello.apply(kate,args)
// console.log(user.sayHello.bind(alex));
// const alexSay = user.sayHello.bind(alex)
// alexSay(33, "react.js")
// alexSay(34, 'Node.js')
// alexSay(11, 'Java')
// user.sayHello(28, "HTML")
// alexSay()
// console.log(alexSay);



// ПЕРЕВА ДО 21.00















// 'use strict'
// Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю та розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю із властивості stones.
const chopShop = {
    stones: [
      { name: 'Emerald', price: 1300, quantity: 4 },
      { name: 'Diamond', price: 2700, quantity: 3 },
      { name: 'Sapphire', price: 1400, quantity: 7 },
      { name: 'Ruby', price: 800, quantity: 2 },
    ],
    calcTotalPrice(stoneName) {
        const stone = this.stones.find(({name}) => name === stoneName);
        // const stone = this.stones.find(item => item.name === stoneName);
        // if(stone){
        //     return stone.price * stone.quantity
        // }
        // return "ERROR!!!"
        return stone ? stone.price * stone.quantity : "ERROR!!!"
    },
  };

// а так можно
//  calcTotalPrice(stoneName) {
//        return this.stones.filter(stone => stone.name === stoneName)
//           .map(stone => stone.price * stone.quantity);
//       }?





  console.log(chopShop.calcTotalPrice('Emerald')); // 5200
//   console.log(chopShop.calcTotalPrice('Diamond')); // 8100
//   console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
//   console.log(chopShop.calcTotalPrice('Ruby')); // 1600
//   console.log(chopShop.calcTotalPrice('qwerty'));



// Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкта phonebook щоб код запрацював.
// function  generateId(){
//     console.log("hello");
// }
// const phonebook = {
//     contacts: [],
//     add(contact) {
//       const newContact = {
//         list: 'default',
//         ...contact,
//         id: this.generateId(),
//         createdAt: this.getDate(),
//       };
//       this.contacts.push(newContact);
//     },
//     generateId() {
//       return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//       return new Date();
//     },
//   };


//     phonebook.add({
//       name: 'Mango',
//       email: 'mango@mail.com',
//       list: 'friends',
//     }),


//     phonebook.add({
//       name: 'Poly',
//       email: 'poly@hotmail.com',
//     })
//     console.log(phonebook);




// Example 3 - Калькулятор
// Створіть об'єкт calculator із трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.
// const calculator = {
//     a: 0,
//     b: 0,
//     read(a, b) {
//         console.log('a',a);
//         console.log('b',b);
//         // this.a = a;
//         // this.b = b
//         this.a = a || 0; // 0, NaN, null, undefined, "", false
//         this.b = b ?? 0; // null undefined
//     },
//     add() {
//         return this.a + this.b
//     },
//     mult() {
//         return this.a * this.b
//     }
// };
// calculator.read(7)
// console.log(calculator.add());
// // console.log(calculator.mult());




// const calc = {
//     a: 24,
//     b: 100,
// }

// console.log(calculator.add.call(calc));


