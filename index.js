valor = document.getElementById("name").value;
if( valor == null || valor.length == 0 ) {
  return false;
}
valor = document.getElementById("email").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}
valor = document.getElementById("campo").value;
if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
  return false;
}

const formulario = document.getElementById(formulario)
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]/
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    clave: minlength="8"

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            if(expresiones.nombre.test(e.target.value)) {

            }
            else {
                document.getElementById(grupo_nombre).classList.add('formulario-grupo')
            }
        break;
        case "e-correo"

        break;
        case "clave"

        break;
        case "clave2"

        break;
    }
}

 
function verificarclaves() {
 
    clave1 = document.getElementById('clave');
    clave2 = document.getElementById('clave2');
 
    if (clave1.value != clave2.value) {
        document.getElementsByClassName("texto-error").classList.add("mostrar");
        document.getElementsByClassName("img").classList.add("mostrar")
        return false;
    } 
    else {
        document.getElementsByClassName("texto-error").classList.remove("mostrar");
        document.getElementsByClassName("img").classList.remove("mostrar");
        return true;
    }
}