document.addEventListener("DOMContentLoaded", ()=>{
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const registroButton = document.getElementById('registroButton');
    const inputArray = [
        nombre,
        apellido,
        email,
        password1,
        password2
    ]
    var hasClicked = 0


    registroButton.addEventListener('click', () => {
        hasClicked = 1
        checkValidity(inputArray)
        console.log(inputArray)
        console.log(hasClicked)

    })
})

function checkValidity(inputArray){
    if(password1.value == password2.value && password1.value.length>=6 ) {

        //Pone el input en verde si esta todo bien
        password1.classList.add("is-valid");
        password2.classList.add("is-valid");
        
    }else if (password1.value.length < 6 )  {
        const invalidFeedback1 = document.getElementById('invalidFeedback1');
        invalidFeedback1.textContent = "La contraseña debe tener al menos 6 caracteres.";
        password1.classList.add('is-invalid');


    } else if (password1.value !== password2.value) {

        const invalidFeedback2 = document.getElementById('invalidFeedback2');
        invalidFeedback2.textContent = "Las contraseñas no coinciden.";
        password2.classList.add('is-invalid');
    }
 
    inputArray.forEach(input => {
        console.log(input.value)
        if(!input.value){
            input.classList.add("is-invalid")
        }
    });
}