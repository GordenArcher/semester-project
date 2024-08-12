const user_name = document.getElementById('username')
const pass_word = document.getElementById('password')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('firstname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const firstnameLable = document.querySelector('.firstname label')

firstname.addEventListener('input', () => {
    if(firstname.value.length > 0){
        firstnameLable.classList.add('active')
    }else{
        firstnameLable.classList.remove('active')
    }
})