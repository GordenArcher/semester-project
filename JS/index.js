const mobile = document.getElementById('mobile')
const nav = document.querySelector('.nav_links')

mobile.addEventListener('click', function() {
    nav.classList.toggle('nav_active')
} )

const header = document.querySelector('.header')
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {  
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});