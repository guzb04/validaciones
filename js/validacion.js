document.addEventListener("DOMContentLoaded", ()=>{
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const registroButton = document.getElementById('registroButton');
    const tosButton = document.getElementById("tosButton");

    const checkbox = document.getElementById('terminos');

    function checkboxChecked(){
        if (!checkbox.checked) {
            checkbox.classList.remove("is-valid");
            tosButton.classList.remove("is-valid");
            checkbox.classList.add("is-invalid");
            tosButton.classList.add("is-invalid");
        }else{
            checkbox.classList.remove("is-invalid");
            tosButton.classList.remove("is-invalid");
            checkbox.classList.add("is-valid");
            tosButton.classList.add("is-valid");
        }
    };    

    const inputArray = [
        nombre,
        apellido,
        email,
        password1,
        password2
    ]

    checkbox.addEventListener("click", ()=>{
        checkboxChecked();
    })

    registroButton.addEventListener('click', (event) => {
        checkValidity(inputArray);
        checkboxChecked();
        if(checkSubmit(inputArray) == 6){
            console.log("valid!");
        }else{
            event.preventDefault();
        }


        document.addEventListener("keyup", ()=>{
            checkValidity(inputArray);
        })
    })
})


    // Validacion de constraseñas
    function checkValidity(inputArray){
        if(password1.value == password2.value && password1.value.length>=6 ) {
            //Pone el input en verde si esta todo bien
            password1.classList.remove("is-invalid");
            password2.classList.remove("is-invalid")
            password1.classList.add("is-valid");
            password2.classList.add("is-valid");
            
        }else if (password1.value.length < 6 )  {
            const invalidFeedback1 = document.getElementById('invalidFeedback1');
            const invalidFeedback2 = document.getElementById('invalidFeedback2');
            invalidFeedback1.textContent = "La contraseña debe tener al menos 6 caracteres.";
            invalidFeedback2.textContent = "La primera contraseña es invalida"
            password1.classList.remove("is-valid");
            password1.classList.add('is-invalid');
            password2.classList.remove("is-valid");
            password2.classList.add('is-invalid');
        } else if (password1.value !== password2.value) {
            const invalidFeedback2 = document.getElementById('invalidFeedback2');
            invalidFeedback2.textContent = "Las contraseñas no coinciden.";
            password2.classList.remove("is-valid");
            password2.classList.add('is-invalid');  
        }
    
        
        // Validaciones de nombre apellido y email
    // Nombre
    if(nombre.value){
        nombre.classList.remove("is-invalid")
        nombre.classList.add("is-valid")
    }

    //Apellido
    if(apellido.value){
        apellido.classList.remove("is-invalid")
        apellido.classList.add("is-valid");
    }
   
    //Email
    if(email.value && email.validity.valid){
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
    }else{
        email.classList.remove("is-valid")
        email.classList.add("is-invalid")
    }
    inputArray.forEach(input => {
        if(!input.value){
            input.classList.remove("is-valid")
            input.classList.add("is-invalid")
        }
    });
}

function checkSubmit(inputArray){
    let contador = 0
    inputArray.forEach(element => {
        if (element.classList.contains("is-valid")){
            contador++
        }});

        if (tosButton.classList.contains("is-valid")){
            contador++
        }

        return contador
        
    
}
