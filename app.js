const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )


//mis funciones
function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const edad = document.querySelector("#edad").value
    const apellido = document.querySelector("#apellido").value
    const email = document.querySelector("#email").value
    const desc = document.querySelector("#desc").value


    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Hola ${nombre} tienes la edad de: ${edad} y su apellido es ${apellido}, registro su correo: ${email} y una descripcion: ${desc}`
}


