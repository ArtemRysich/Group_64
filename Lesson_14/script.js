// https://bundlephobia.com/












const cats = ['https://i.ytimg.com/vi/iKA6ZXpGcGQ/maxresdefault.jpg', 'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg', 'https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg', 'https://i.guim.co.uk/img/media/941093798b256e5d1aa6246a08824bc86f62a31f/0_0_5000_3000/master/5000.jpg?width=1300&quality=85&fit=max&s=ea672fb16df8634901283252059baaf8', 'https://nypost.com/wp-content/uploads/sites/2/2022/06/reddit-cats-judging-looks-00.jpg?quality=75&strip=all', 'https://gdb.voanews.com/09690000-0a00-0242-5408-08da76ebde16_cx0_cy3_cw99_w1200_r1.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCK8yYjQ6igjrAJyCyXUwV6U7RDkLVc4FVnQ&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU', 'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWEQxVHz2ZzUdIKINgA-LvmuZgoady4hu4hQ&usqp=CAU', 'https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xXPTgr5Lug8qU_akXp2oC_4m5w3FoAvx_Q&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnB4if5HpwDvEqkgBShHrRvbwYCya8vzB86g&usqp=CAU', 'https://assets.globalwildlife.org/m/3b6039a74fd067ea/webimage-Tigrinia.jpg', 'https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg', 'https://www.nhm.ac.uk/content/dam/nhmwww/discover/wild-cats/margay-two-column.jpg.thumb.768.768.jpg', 'https://irs.www.warnerbros.com/gallery-v2-jpeg/cats__dogs_photo_12-14571309.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIyGk9Ds3bdd4B404EcoMDrVUKnU5u9KABOg&usqp=CAU'];

const list = document.querySelector('.js-list')
const markup = cats.reduce((acc, url) => acc + `<li>
<img src="${url}" alt="cat" loading="lazy" width="300">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates qui dolore voluptatum sit, commodi nisi, blanditiis at quia eius ut assumenda maiores repudiandae vitae architecto iusto temporibus. Minima, accusantium sed!
Tenetur veniam maiores incidunt sapiente, corporis laborum! Velit, eius ratione iusto eaque doloribus hic tempore voluptatibus incidunt consequatur itaque iste voluptate expedita eos sed, dolore eligendi esse nobis sequi ipsum.
Itaque, iure expedita. Ad magnam est, voluptate praesentium optio deleniti tenetur dolorem fugiat sed quo voluptatum, harum adipisci magni rem tempora modi sint eligendi perferendis qui eaque facere expedita alias!
Nobis itaque voluptate ducimus et rem error iste inventore officiis harum quo, dolorum architecto accusantium accusamus voluptatibus ad nesciunt, recusandae nostrum unde libero, aspernatur praesentium? Accusamus fuga ab at hic?
Aperiam accusamus reiciendis distinctio tempora odio expedita nulla id, facere perspiciatis quos velit voluptatem deserunt illum atque voluptates nesciunt, soluta architecto ex natus minus fugiat. Non nesciunt blanditiis quis laborum!
.</p>
</li>`, '')
list.insertAdjacentHTML("beforeend", markup)

// const instance = basicLightbox.create(`
// <img src="https://e3.365dm.com/22/07/768x432/skynews-cats-pet_5846440.jpg?20220726201324" alt="cat" loading="lazy" width="300">
// `)
// instance.show()
// // console.log(basicLightbox);
// console.log(basicLightbox);

// const markup = cats.map(url => `<li><img src="${url}" alt="cat"></li>`)


// console.log(throttle);
// console.log(debounce);

// let counter = 0;
// document.addEventListener('scroll', _.throttle(onScroll, 1500, {leading :true, trailing:false}));

// function onScroll(evt) {
//     counter += 1
//     console.log(evt);
//     console.log(counter);
// }



// ПЕРЕРВА ДО 20.55


// const input = document.querySelector('.js-query');

// input.addEventListener('input', _.debounce(onInput, 3000, {
//     leading: true,
//     trailing: true,
//     maxWait: 500
// }));

// function onInput(evt) {
//     console.log(evt.target.value);
// }

console.log();

// Розбір документації

// 1 Підключення
// 2 Ініціалізація екземпляру класу (обов'язково дивитись приклади в докі)
// 3 Розглянути методи які присутні на нашому екземплярі класу

// Плагін
// JavaScript (ES6) code snippets

// https://www.freecodecamp.org/ukrainian/
// https://www.codewars.com/dashboard
// https://js.coderslang.com/
