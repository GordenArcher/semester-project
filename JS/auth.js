const user_name = document.getElementById('username')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('firstname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const firstnameLable = document.querySelector('.firstname label')
const lastameLable = document.querySelector('.lastname label')
const usernameLable = document.querySelector('.username label')
const emailLable = document.querySelector('.email label')
const phoneLable = document.querySelector('.phone label')
const passwordLable = document.querySelector('.password label')
const password2Lable = document.querySelector('.password2 label')

firstname.addEventListener('input', () => {
    if(firstname.value.length > 0){
        firstnameLable.classList.add('active')
    }else{
        firstnameLable.classList.remove('active')
    }
})

lastname.addEventListener('input', () => {
    if(lastname.value.length > 0){
        lastameLable.classList.add('active')
    }else{
        lastameLable.classList.remove('active')
    }
})

user_name.addEventListener('input', () => {
    if(user_name.value.length > 0){
        usernameLable.classList.add('active')
    }else{
        usernameLable.classList.remove('active')
    }
})

email.addEventListener('input', () => {
    if(email.value.length > 0){
        emailLable.classList.add('active')
    }else{
        emailLable.classList.remove('active')
    }
})

phone.addEventListener('input', () => {
    if(phone.value.length > 0){
        phoneLable.classList.add('active')
    }else{
        phoneLable.classList.remove('active')
    }
})

password.addEventListener('input', () => {
    if(password.value.length > 0){
        passwordLable.classList.add('active')
    }else{
        passwordLable.classList.remove('active')
    }
})

password2.addEventListener('input', () => {
    if(password2.value.length > 0){
        password2Lable.classList.add('active')
    }else{
        password2.classList.remove('active')
    }
})