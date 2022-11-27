// var a;
// const a = 10;
// a = 15;  //Викличе помилку 
// let b; //undefined
// b = 15;

// console.log('a',a);
// a = 15;
//  console.log('a',a);
// a = 20
//  console.log('a',a);
// // console.log("b",b);
//  let b = 20



// let a = 10;

// if(true){
//     console.log(a);
//     var b = 15;

// }



// function foo(){
//     console.log('b inside function',b);
// }
// foo()



// const b = 'hello';
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// if(true){

// }

// switch(b){

// }



// function foo(){

// }

// {

// }
// ----------------------------------------------
// let a = 10
// if (true) {
//     console.log(a);
//     let a = 100;
// }

// ----------------------------------------------------

// let a = 10
// if (false) {
//     a = 100;
// }
// console.log(a);


// --------------------------------------------------------

// if (true) {
//     let a = 10;
// }
// console.log(a);

//--------------------------------------------------

// let a = 10;

// if (true) {
//     let a = 15;
//     if (true) {
//         a = 100
//     }
//     console.log(a); // 100
//     a = 77;
// }
// console.log(a); // 10

// let a = 10;
// let b = 15
// a = 99;



// console.log(a);
// console.log(b);

// Усі примітиви мають присвоєння за значенням
// let a = 10; //10
// let b = a;  //10
// a = 99;



// console.log(a);
// console.log(b);



// Усі складні типи даних мають присвоєння за посиланям.
// let a = [1,2,3,4,5];
// let b = a;
// a.splice(2,1)
// b.splice(0,1)
// console.log(a);
// console.log(b);
// console.log(a === b);

//---------------------мутабельність та імутабельність типів даних
// 1 Примітивні типи даних - це імутабельні типи даних
// 2 Складні типи даних - це мутабельні типи даних
// let a = [1, 2, 3, 4, 5];
// a.splice(2, 1);

// let b = 'Hello world';
// // b.split('').splice(2,6)

// console.log(b.split(' '));
// b.split('@Helo@').join("elo");

// console.log(b);


//------------------------------------------------------------


// && і
// || або 
// !  не
// ??  нульового поєднання


// 6 значень які завжди повернуть false
// 1 - null
// 2 - NaN
// 3 - 0
// 4 - '' (пустий рядок)
// 5 - undefined
// 6 - false

// console.log(null && 4); // null
// console.log(0 && true); // 0
// console.log(1 && ')');


// console.log( 0 || 7 || null); // 7
// console.log( 0 || false || null);//null

// ?? не спрацьовує тільки на null та undefined
// console.log(0 ?? 6 ?? null);

// console.log('' ?? 6 ?? null);
// console.log(undefined ?? 6 ?? null);


// Перерва до 20.20




// const arr = [1, 2, 3, 4, 5];


// if(arr.length !== 0){

// }

//       5
// if(arr.length){

// }



// if(arr.length === 0){

// }

// //0 => false =>!false => true
// if(!arr.length){

// }



// const str = '';
// if(str  === ''){

// }


// if(!str){

// }



// if(email === '' || password === ''){

// }

// if(!email || !password){

// }




// (function () {

// })()

// function foo(){
//     console.log('function declaration');
// }
// console.log(foo.name);

// const boo = function () {
// console.log('function expresion');
// }
// console.log(boo.name);



// const arr = ['😀', '😂', '😎'];
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

//      i=індекс   j= порядковий номер
// for (let i = 0, j = 1; i < arr.length; i += 1, j += 1) {
//     console.log(j, arr[i]);

// }



// const arr = ['😀', '😂', '😎'];
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// // const result = arr.concat(arr1)


// for (let i = 0; i < arr.length || i < arr1.length; i += 1) {
//     if (arr[i]) {
//         console.log('arr', arr[i]);
//     }

//     if (arr1[i]) {
//         console.log('arr1', arr1[i]);
//     }
// }

//індекси      0     1      2
// const arr = ['😀', '😂', '😎'];
// //порядковий   1     2      3

// function foo() {
// console.log('fooo');
// }
// const a = 1;


// const b = {
//     item: 1,
// }
// Object.freeze(b);

// b.item = 2
// b.test = foo;
// console.log(b);




// function boo(){
//     console.log("boo");
// }
// console.log(boo);
// function foo(val,val1,callback){
//     ///
//     ///
//     ///
//     ///
//     callback()
// }
// foo(1,2,boo)




// const avtoria = {
//     Audi: {     
//         Q7: 10000,
//         A4: 15000,
//         A6: 25000,
//         A8: 30000
//     },

//     Nissan: {
//         // Almera: 12000,
//         // Tiana: 13000,
//         // GTR: 30000,
//     },
//     Ford: {
//         F150: 45000,
//         Kuga: 9000,
//         Focus: 7000,
//     },
//     Honda: {
//         Accord: 9000,
//         Civic: 7000,
//     }
// }
// console.log('avtoria.Audi.Q7',avtoria.Audi.Q7);
// console.log("avtoria['Audi']['Q7']",avtoria['Audi']['Q7']);

// function search(brand) {
//     // console.log(avtoria[brand]);
//     const arr = Object.keys(avtoria[brand])
//     console.log(arr);
//     const result = arr.reduce((acc, item, idx, arr) =>{
//         return acc + `${idx + 1} Модель ${item} ціна ${avtoria[brand][item]}\n`
//     }, arr.length ? 'Список доступни автомобілів: \n' : 'Нажаль за вашим пошуком нічого немає')
//     console.log(result);
// }
// search('Audi')
// search('Nissan')




// const str = 'asfgegerbnayufglafiaygfhiahfoagukabfya'
// // {
// //     a :8,
// //     s : 1,
// // }
// const result = str.split('').reduce((acc,item)=>{
//     // console.log(typeof item);
//     if(!acc.hasOwnProperty(item)){
//         acc[item] = 1;
//     }else{
//         acc[item] +=1;
//     }

//     return acc
// },{})

// console.log(result);


// function foo(x) {
//     const y = 10
//     if (x > 10) {
//         return function () {
//             return x * y
//         }
//     } else {
//         return 'NO'
//     }
// }
// // console.log(foo(12)());
// const result = foo(12)
// console.log(result);
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());
// console.log(result());