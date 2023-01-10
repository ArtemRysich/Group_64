// https://dummyjson.com/docs/posts

// CRUD
// C Create - POST
// R Read   - GET
// U Update - PUT PATCH
// D DELETE - DELETE

// БЕКЕНД PATCH
// const user = {
//     name: 'Artem',
//     email: 'artem@gmail.com'
// }

// const patch = {
//     email: "artem1@gmail.com"
// }

// const afterPatch = {
//     name: 'Artem',
//     email: 'artem1@gmail.com'
// }



// БЕКЕНД PUT
// const user = {
//     name: 'Artem',
//     email: 'artem@gmail.com'
// }

// const put = {
//     email: "artem1@gmail.com"
// }

// const afterPUT = {
//     email: 'artem1@gmail.com'
// }

// // https://jsonplaceholder.typicode.com/posts

// POST
// https://developer.mozilla.org/ru/docs/Web/HTTP/Status/201
const options = {
    method: "POST",
    body: JSON.stringify({
        name: 'Artem',
        email: 'artem@gmail.com'
    }),
    // headers:{
    //     "Content-Type": 'text/html'
    // }
}


// fetch(`https://jsonplaceholder.typicode.com/posts?q=Lviv&key=asdfgjhgsgaASD`, options)
//     .then(resp => resp.json())
//     .then(data => console.log(data))

// const arr = ['http://127.0.0.1:5500/',"http://127.0.0.1:5501/"]
//{
// id: 101,
// name: 'Artem',
// email: 'artem@gmail.com'
// }

// PUT PATCH

// const options = {
//     method: 'PUT', //PATCH
//     body: JSON.stringify({
//         title : 'Hello world'
//     })
// }

// fetch(`https://jsonplaceholder.typicode.com/posts/101`, options).then(resp => console.log(resp)).catch(err => console.log(err))


// DELETE
// const options ={
//     method: 'DELETE'
// }
// fetch(`https://jsonplaceholder.typicode.com/posts/101`,options)

// fetch('https://xl-main-api.rozetka.com.ua/v3/sections/get?front-type=xl&country=UA&lang=ru&sectionMoreLastBefore=goods_id=282286938').then(resp =>console.log(resp))