// class Product {
//     static stock = {
//         stock: 'stock',
//         inStock: 'in-stock'
//     }
//     static metric = 'kg';
//     static customKey = 33;
//     constructor(name, qty, stock, metric) {
//         this.name = name;
//         this.qty = qty;
//         this.stock = stock;
//         this.metric = metric
//         this.custom = Product.customKey
//     }
// }


// const banana = new Product('banana', 10, Product.stock.inStock, Product.metric);

// console.log(banana);
// console.log(Product.customKey);
// let value = 0


// function foo() {
//     value += 1;

//     if (value < 10) {
//         foo()
//     }
//     console.log(value);
// }
// foo()


// function foo(){
// console.log(arguments);
// const arr = Array.from(arguments)
// const arr1 = [...arguments]
// console.log(arr);
// console.log(arr1);
// const result = [...arguments].reduce((acc,item) => acc + item, 0)
// console.log(result);
// }
// foo(1,2,3,4,5,6,78,9)
// 'use strict'

// console.log(window);
// function foo(){
//     console.log('declaration',this);
// }
// foo()

// const boo = function(){
//     console.log('expression',this);
// }
// boo()

// const arrow = () => {
//     console.log('arrow', this);
// }
// arrow()




// if(5>6)
// if(5 === 5)

// 1 null
// 2 undefined
// 3 0
// 4 NaN
// 5 ''
// 6 False
// const value = ''
// const arr = []
// if(!value){
//     console.log('empty');
// }

// if(!arr.length){
//     console.log('empty');
// }





// function foo() {
//     const obj = {
//         name: 'User'
//     }
//     const arr = ['a', 2, null, true]

//     function boo(str) {
//         console.log(str + obj.name, arr);
//     }
//     return boo
// }


// console.log(foo()('Hello my name is '));

// class Test {
//     constructor(qwer = []){
//         this.arr = qwer
//     }
// }


// const test = new Test([1,2,3,4,5])
// console.log(test);




// const win = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [1, 5, 9],
//     [3, 5, 7]
// ];


// const playerX = [2,1,4,5]



// const isWinner = win.some(arr => arr.every(item => playerX.includes(item)))
// console.log(isWinner);



// const arr = [{
//     name: 'user',
//     age: 22,
//     car: 'honda'
// }, {
//     name: 'user',
//     age: 23,
//     car: 'bmw'
// }, {
//     name: 'user',
//     age: 24,
//     car: 'volvo'
// }]


// const user = {
//     name: 'user',
//     age: 24,
//     car: 'volvo'
// }
// // user.car => 'volvo'
// // user['car'] => 'volvo'


// const arr = Object.keys(user)
// arr.forEach(key => {
//   console.log(user[key]);
// })
// console.log(arr);
// const str = arr.reduce((acc, {
//     car,
//     name
// }, idx) => acc + `${idx + 1}. name ${name}, car ${car}\n`, '')
// console.log(str);

// const numbers = [1, 2, 5, 6, 3, 4, 8, 8, 0]
// [].push(1) //1
// [1].push(1) //2

// const result = numbers.reduce((acc, value) => !(value % 2) ? acc.push(value) : acc, [])
// const result = numbers.reduce((acc, value) => {
//     // console.log(acc.push(value));
//     !(value % 2) ? acc.push(value): acc
//     return acc
// }, [])
// console.log(result);

// const result = numbers.reduce((acc,value) => acc + value)
// console.log(result);
// const str = arr.reduce((acc, obj) => {
//     console.log(acc);
//    return acc + `name ${obj.name}, car ${obj.car}\n`
// })

// console.log(str);



// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]
// console.log('clients',clients); 



// function foo() {
//     console.log(arguments);
// }

// foo(1, 2, 34, 5, 6)

// const user = {
//     name: "user",
//     getUser() {
//         console.log('getUser',this);
//         const boo = () => {
//             console.log(this);
//         }
//         boo()
//     }
// }
// user.getUser()
// const boo = (...args) => {
//     console.log(args);
// }

// boo(1,2,34,5)


// function boo(){
//     console.log("hello world");
// }


// function foo(value, name, callback){

// }


// // foo(12,"user",function(){
// //     console.log('hello');
// // })


// foo(12,"user",() => console.log("hello world"))

//  foo()
// function foo(){

// }


// const course = ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// const result = course.filter((value,idx,arr) => arr.indexOf(value) === idx)


const arr = [{
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male"
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female"
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male"
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female"
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male"
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
        isActive: false,
        balance: 1498,
        gender: "male"
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female"
    }
]


const getSortedFriends = users => {
    return users.flatMap(item => item.friends).filter((name, idx, arr) => arr.indexOf(name) === idx).sort((a, b) => a.localeCompare(b))
};

console.log(getSortedFriends(arr));




// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

const products = [{
    id: 'sku1',
    qty: 1,
}, {
    id: 'sku2',
    qty: 2,
}, {
    id: 'sku3',
    qty: 3,
}, {
    id: 'sku1',
    qty: 6,
}, {
    id: 'sku1',
    qty: 8,
}, {
    id: 'sku2',
    qty: 19,
}, {
    id: 'sku4',
    qty: 1,
}]



function foo(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i].id === arr[j].id) {
                arr[i].qty += arr[j].qty;
                arr.splice(j, 1)
                j -= 1;
            }
        }
    }
}
foo(products)
console.log(products);