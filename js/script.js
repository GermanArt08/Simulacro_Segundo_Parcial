// Declaro primero todas las variables globales
let cantObras = document.querySelector("#cantObras").value
let nombre = document.querySelector("#nombre").value
let cantPant = document.querySelector("#cantPant").value
let costoXdia = document.querySelector("#costoXdia").value
let cantVisit = document.querySelector("#cantVisit").value

const boton = document.querySelector("#boton")

boton.addEventListener ("click", function(e)){
    e.preventDefault ()
    ingresarDatos()
}
//Pongo que la cantidad de obras sea undefined, ya que el usuario es quien la define
cantObras = [];

function ingresarDatos (){
    //poner aca las primeras variables
    let cantObras = document.querySelector("#cantObras").value
    if (apellido == "") {
        alert("El apellido no puede estar vacío");
        return false;
    }
    let nombre = document.querySelector("#nombre").value
    if (nombre == "") {
        alert("El nombre no puede estar vacío");
        return false;
    }
        
    
        
    let edad =document.querySelector("#edad").value
    if (edad == "" || isNaN(edad)) {
        alert("Ingrese una edad válida");
        return false;
    }
    let num = document.querySelector("#numero").value
    if (num == "" || isNaN(num)) {
        alert("Ingrese un número válido");
        return false;
    }
    let tiempo = document.querySelector ("#tiempo").value
    if (tiempo =="" || isNaN(tiempo)) {
        alert("Ingrese un tiempo válido");
        return false;
    }

    const corredor = {
        nombre: nombre,
        apellido: apellido,
        edad: Number(edad),
        num: Number(num),
        tiempo: Number(tiempo),
    }
    corredores.push(corredor)
    alert ("Datos ingresados correctamente")

    vaciarFormulario();
}
function vaciarFormulario () {
    document.querySelector ("#nombre").value = "";
    document.querySelector ("#apellido").value = "";
    document.querySelector ("#edad").value = "";
    document.querySelector ("#numero").value = "";
    document.querySelector ("#tiempo").value = "";

    verificarCantDatos();
}
function verificarCantDatos() {
    if (corredores.length>=cantidad) {
        boton.disabled = true;
    calcularResultados();
    }
}
}