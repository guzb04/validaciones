const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');

const registroButton = document.getElementById('registroButton');



registroButton.addEventListener('click', () => {
    if(password1.value == password2.value && password1.value.length>=6 ) {
        alert("funcionen!");
    }

    if(email.value ==1){
        alert("dsdsdsds")
    }
})

