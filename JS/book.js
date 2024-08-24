
const phoneNumberLabel = document.querySelector(".phone label")
const emailLabel = document.querySelector(".email label")
const fullNameLabel = document.querySelector(".fullname label")
const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

fullname.addEventListener('input', () => {
    if(fullname.value.length > 0){
        fullNameLabel.classList.add('active')
    }else{
        fullNameLabel.classList.remove('active')
    }
})

email.addEventListener('input', () => {
    if(email.value.length > 0){
        emailLabel.classList.add('active')
    }else{
        emailLabel.classList.remove('active')
    }
})

phone.addEventListener('input', () => {
    if(phone.value.length > 0){
        phoneNumberLabel.classList.add('active')
    }else{
        phoneNumberLabel.classList.remove('active')
    }
})