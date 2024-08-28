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
const error = document.querySelector('.error span')

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

const loader = document.querySelector('.loader')
const submit = document.getElementById('submit')

document.addEventListener('submit', (e) => {
    e.preventDefault();

    error.textContent = '';

    if (firstname.value.length <= 0) {
        return error.textContent = 'First name is required.';
    }

    if (lastname.value.length <= 0) {
        return error.textContent = 'Last name is required.';
    }

    if (user_name.value.length <= 0) {
        return error.textContent = 'Username is required.';
    }

    if (!validateEmail(email.value)) {
        return error.textContent = 'Please enter a valid email address.';
    }

    if (password.value.length <= 0) {
        return error.textContent = 'Password is required.';
    }

    if (password.value !== password2.value) {
        return error.textContent = 'Password do not match.';
        
    }


    submit.value = '';
    loader.style.display = 'flex';
    setTimeout(() => {
        error.style.display = 'none'
        window.location.assign('/');
    }, 3000);
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}