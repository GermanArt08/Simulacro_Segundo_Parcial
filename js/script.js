const cantObras = 2;
let obras =[];
const boton = document.querySelector("#boton")
boton.addEventListener ("click", function(e){
    e.preventDefault ()
    ingresarDatos()
})
//Pongo que la cantidad de obras sea undefined, ya que el usuario es quien la define


function ingresarDatos (){
    //poner aca las primeras variables
    let cantObras = document.querySelector("#cantObras").value
    if (cantObras == "" || isNaN(cantObras)) {
        alert("Ingrese una cantidad de obras válida");
        return false;
    }
    let nombre = document.querySelector("#nombre").value
    if (nombre == "") {
        alert("El nombre no puede estar vacío");
        return false;
    }    
    let cantPant = document.querySelector("#cantPant").value
    if (cantPant == "" || isNaN(cantPant)) {
        alert("Ingrese una cantidad de pantallas válida");
        return false;
    }
    let costoXdia = document.querySelector("#costoXdia").value
    if (costoXdia == "" || isNaN(costoXdia)) {
        alert("Ingrese un número válido");
        return false;
    }
    let cantVisit = document.querySelector("#cantVisit").value
    if (cantVisit =="" || isNaN(cantVisit)) {
        alert("Ingrese una cantidad de visitantes válida");
        return false;
    }

    const obra = {
        nombre: nombre,
        costoXdia: Number(costoXdia),
    }
    obras.push(obra)
    alert ("Datos ingresados correctamente")

    vaciarFormulario();
}
function vaciarFormulario () {
    document.querySelector ("#cantObras").value = "";
    document.querySelector ("#nombre").value = "";
    document.querySelector ("#cantPant").value = "";
    document.querySelector ("#costoXdia").value = "";
    document.querySelector ("#cantVisit").value = "";

    verificarCantDatos();
}
function verificarCantDatos() {
    if (obras.length>=cantObras) {
        boton.disabled = true;
    calcularResultados();
    }
}
