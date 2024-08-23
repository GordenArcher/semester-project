const row1 = document.querySelector('.row1')
const row2 = document.querySelector('.row2')
const row3 = document.querySelector('.row3')
const row4 = document.querySelector('.row4')
const row5 = document.querySelector('.row5')
const row6 = document.querySelector('.row6')
const row7 = document.querySelector('.row7')
const row8 = document.querySelector('.row8')
const iconn1 = document.querySelector('.row1 .iconn')
const iconn2 = document.querySelector('.row2 .iconn')
const iconn3 = document.querySelector('.row3 .iconn')
const iconn4 = document.querySelector('.row4 .iconn')
const iconn5 = document.querySelector('.row5 .iconn')
const iconn6 = document.querySelector('.row6 .iconn')
const iconn7 = document.querySelector('.row7 .iconn')
const iconn8 = document.querySelector('.row8 .iconn')


row1.addEventListener('click', () => {
    row1.classList.toggle('release')
    iconn1.classList.toggle('iconnnnn')
})

row2.addEventListener('click', () => {
    row2.classList.toggle('release')
    iconn2.classList.toggle('iconnnnn')
})

row3.addEventListener('click', () => {
    row3.classList.toggle('release')
    iconn3.classList.toggle('iconnnnn')
})

row4.addEventListener('click', () => {
    row4.classList.toggle('release')
    iconn4.classList.toggle('iconnnnn')
})

row5.addEventListener('click', () => {
    row5.classList.add('release')
    iconn5.classList.toggle('iconnnnn')
})

row6.addEventListener('click', () => {
    row6.classList.toggle('release')
    iconn6.classList.toggle('iconnnnn')
})

row7.addEventListener('click', () => {
    row7.classList.toggle('release')
    iconn7.classList.toggle('iconnnnn')
})

row8.addEventListener('click', () => {
    row8.classList.toggle('release')
    iconn8.classList.toggle('iconnnnn')
})