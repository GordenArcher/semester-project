const mobile = document.getElementById('mobile')
const nav = document.querySelector('.nav_links')

mobile.addEventListener('click', function() {
    nav.classList.toggle('nav_active')
} )

window.onclick = function() {
    nav.style.display = 'none'
}