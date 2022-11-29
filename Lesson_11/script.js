// const list = document.querySelector('ul');
// const list = document.querySelector('.js-products');
// const list = document.querySelector('#list-id');
// const list = document.getElementById('list-id')
// const items = document.querySelectorAll('.js-item')
// const items = document.getElementsByClassName('js-item')
// console.log(items);
// const li = document.querySelector('.js-products li')
// console.dir(list.children);
// // const items = Array.from(list.children);
// // const items = [...list.children];
// // console.log(items);

// for(const elem of list.children){
//     console.log(elem);
// }


// const itemsStatic = document.querySelectorAll('.js-item')
// const items = document.getElementsByClassName('js-item')
// const list = document.querySelector('.js-products');
// const input = document.querySelector('input');
// const li = document.createElement('li');
// // li.classList.add('js-item');
// // li.classList.remove('js-item');
// // li.classList.toggle('js-item')
// li.style.color = 'red';
// li.textContent = 'hello world';
// input.value = 'hello world';
// list.append(li)



// const li = '<li class="js-item">Hello world</li>'
// list.insertAdjacentHTML('beforeend', li)
// list.innerHTML += li
// list.innerHTML = list.innerHTML + li




// https://developer.mozilla.org/ru/docs/Web/API/HTMLElement/innerText
// const list = document.querySelector('.js-products');
// console.dir(list.innerText);
// console.log(list.textContent);
// const target = [...list.children].find(item => Number(item.textContent) === 3)
// target.remove()
// list.innerHTML ='';
// [...list.children].forEach(item => item.remove())
// list.lastElementChild.remove()
// const itemsStatic = document.querySelectorAll('.js-item');
// const items = document.getElementsByClassName('js-item');


// let markup = '';

// for (let i = 1; i <= 5; i += 1) {
//     markup += `<li class="js-item">${Number(list.lastElementChild.textContent) + i}</li>`
// }
// // console.log(markup);
// list.insertAdjacentHTML('beforeend', markup);
// console.log('querySelectorAll', itemsStatic);
// console.log('getElementsByClassName', items);


// console.dir(list);

// const cars = [{
//         id: 1,
//         car: 'Honda',
//         type: 'Civic',
//         price: 12000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU'
//     },
//     {
//         id: 2,
//         car: 'Audi',
//         type: 'Q7',
//         price: 40000,
//         img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg'
//     }, {
//         id: 33,
//         car: 'BMW',
//         type: '5 siries',
//         price: 9000,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU'
//     }, {
//         id: 3,
//         car: 'Honda',
//         type: 'Accord',
//         price: 20000,
//         number: '+380000000000',
//         img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg'
//     }, {
//         id: 4,
//         car: 'Volvo',
//         type: 'XC60',
//         price: 7000,
//         img: 'https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320'
//     }
// ]



// const list = document.querySelector('.js-cars');

// const markup = cars.map(({
//     id,
//     car,
//     type,
//     price,
//     img
// }) => `<li data-id="${id}">
// <img src="${img}" alt="${car}" width="300">
// <h2>Марка: ${car}</h2>
// <h3>Модель: ${type}</h3>
// <h4>Ціна: ${price}</h4>
// </li>`).join('')

// list.insertAdjacentHTML('beforeend',markup)
// console.log(markup);'




// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = arr.map(value => {
//  if(!(value%2)){
//     return value
//  }
// });
// console.log(result);