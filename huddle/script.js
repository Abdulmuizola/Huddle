"Use strict"

const navBtn = document.querySelector('.nav-btn');
const mainBtn = document.querySelector('.button')
const footerBtn = document.querySelector('.BUTTON')
const overlay = document.querySelector('.overlay');
const modalEL = document.querySelector('.modal');
const btn = document.querySelector('.modal-btn');
const input = document.querySelectorAll('.each-input');
const gender = document.querySelector('#gender')
const firstname = document.querySelector('.firstname');
const surname = document.querySelector('.surname');
const mail = document.querySelector('.mail');
const password = document.querySelector('.password');
const confirmpassword = document.querySelector('.confirm');

navBtn.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove('hidden');
    modalEL.classList.remove('hidden');
})

mainBtn.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove('hidden');
    modalEL.classList.remove('hidden');
});

footerBtn.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove('hidden');
    modalEL.classList.remove('hidden');
});

overlay.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.add('hidden');
    modalEL.classList.add('hidden');
});

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(!firstname.value || !surname.value || !mail.value || !gender.value || !password.value || !confirmpassword.value){
        alert('input field is empty');
        return;
    }

    if (confirmpassword.value !== password.value) {
        alert("Password must match");
        return;
    }
         
    overlay.classList.add("hidden");
    modalEL.classList.add("hidden");
    alert("Account Created successfully");
         

    firstname.value = ""; surname.value = ""; gender.value = ""; mail.value = ""; password.value = ""; confirmpassword.value = "";

});