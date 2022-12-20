// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii




// console.log('Start');

// const timeOut = setTimeout(() =>{
//     console.log("setTimeout 1000");
// },1000)



// const timeInter = setInterval(()=>{
// console.log("setInterval 2000")
// },2000)

// setTimeout(()=> {
// clearInterval(timeInter)
// console.log('Finish timeInter');
// },8000)

// console.log('After all');







//  console.time('Web Api');
// setTimeout(()=>{
//     console.log("test");
// },100)

// for(let i = 0; i < 99999; i+=1){
//     console.log(i);
// }
// console.timeEnd("Web Api");






// const newYear = new Date('2022-12-31T23:59:59')
// console.log(newYear);

// setInterval(()=>{
//     const currentTime = new Date();
//     console.log(newYear - currentTime);
// },1000)



// Перерва до 20.45


const namesOfDay = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота'];
const namesOfMonth = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

Date.now()

const day = document.querySelector('.date-day');
const dayOfMonth = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');
const digitalClock = document.querySelector('.digital-clock');
const arrowHours = document.querySelector('.clock-hours__arrow');
const arrowMinutes = document.querySelector('.clock-minutes__arrow');
const arrowSeconds = document.querySelector('.clock-seconds__arrow');

// setInterval(() => {
//     const currentTime = new Date();
//     const timeDay = namesOfDay[currentTime.getDay()];
//     const timeDate = currentTime.getDate();
//     const timeMonth = namesOfMonth[currentTime.getMonth()];
//     const timeYear = currentTime.getFullYear();
//     const timeHour = currentTime.getHours();
//     const timeMinutes = currentTime.getMinutes();
//     const timeSeconds = currentTime.getSeconds();
//     const totalTime = `Поточний час: ${timeHour.toString().padStart(2,'0')} : ${timeMinutes.toString().padStart(2,'0')} : ${timeSeconds.toString().padStart(2,'0')}`

//     day.textContent = timeDay;
//     dayOfMonth.textContent = timeDate;
//     month.textContent = timeMonth;
//     year.textContent = timeYear;
//     digitalClock.textContent = totalTime;

//     const forSeconds = timeSeconds * (360 / 60);
//     const forMinutes = timeMinutes * (360 / 60);
//     // const forHours = timeHour * (360 / 12) + timeMinutes * (30 / 60);
//     const forHours = 30 * (timeHour + (1 / 60) * timeMinutes);

//     arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
//     arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
//     arrowHours.style.transform = `rotate(${forHours}deg)`;
//     console.log(forSeconds);
// }, 1000)

setInterval(() => {
    const currentTime = new Date();
    const date = makeDate(currentTime)

    createDigitalClock(date)
    createClock(date)
}, 1000)

function createDigitalClock(date){
    const totalTime = `Поточний час: ${date.timeHour.toString().padStart(2,'0')} : ${date.timeMinutes.toString().padStart(2,'0')} : ${date.timeSeconds.toString().padStart(2,'0')}`

    day.textContent = date.timeDay;
    dayOfMonth.textContent = date.timeDate;
    month.textContent = date.timeMonth;
    year.textContent = date.timeYear;
    digitalClock.textContent = totalTime;

}

function createClock(date){
    const forSeconds = date.timeSeconds * (360 / 60);
    const forMinutes = date.timeMinutes * (360 / 60);
    // const forHours = date.timeHour * (360 / 12) + date.timeMinutes * (30 / 60);
    const forHours = 30 * (date.timeHour + (1 / 60) * date.timeMinutes);

    arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
    arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
    arrowHours.style.transform = `rotate(${forHours}deg)`;
    console.log(forSeconds);
}


function makeDate(time) {
    const timeDay = namesOfDay[time.getDay()];
    const timeDate = time.getDate();
    const timeMonth = namesOfMonth[time.getMonth()];
    const timeYear = time.getFullYear();
    const timeHour = time.getHours();
    const timeMinutes = time.getMinutes();
    const timeSeconds = time.getSeconds();
    return {
        timeDay,
        timeDate,
        timeMonth,
        timeYear,
        timeHour,
        timeMinutes,
        timeSeconds
    }
}