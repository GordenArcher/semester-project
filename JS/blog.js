const rel1 = document.querySelector('.rel1')
const rel2 = document.querySelector('.rel2')
const rel3 = document.querySelector('.rel3')
const load = document.getElementById('load_more')

load.addEventListener('click', () => {
    setTimeout(() => {
        rel1.classList.toggle('show')
        rel2.classList.toggle('show')
        rel3.classList.toggle('show')
        load.innerHTML = 'Load Less'
    }, 3000)
})