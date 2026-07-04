let obras = [];
let cantidadTotal = 0;
let contadorObras = 0;
let resto = document.querySelector("#resto");
let listado = document.querySelector(".listado")
const btnEnviar = document.querySelector("#btnEnviar");const btnCalcular = document.querySelector("#btnCalcular");
const btnReset = document.querySelector("#btnReset");

btnReset.addEventListener( "click", function(e) {
    e.preventDefault ();
    vaciarFormulario ();
})
btnEnviar.addEventListener ("click", function(e){
    e.preventDefault ();
    ingresarDatos();
})
//Pongo que la cantidad de obras sea undefined, ya que el usuario es quien la define
function ingresarDatos() {
    if (cantidadTotal === 0) { 
        let cantObrasInput = document.querySelector("#cantObras");
        let cant = cantObrasInput.value;
        if (cant == "" || isNaN(cant) || cant <= 0) {
            alert("Ingrese una cantidad de obras válida");
            return;
        }

        cantidadTotal = +cant;

        resto.style.display = "inline-block";
        cantObrasInput.style.display = "none";

        let infoCantidad = document.querySelector("#infoCantidad");
        if (infoCantidad) {
        infoCantidad.textContent = `Cantidad de obras a exponer: ${cantidadTotal}`;
        }
        btnEnviar.textContent = "Agregar obra";
        
        vaciarFormulario();
        return;
    } 
        let nombre = document.querySelector("#nombre").value
        if (nombre == "") {
            alert("El nombre no puede estar vacío");
             return false;
            }    
        let cantPant = document.querySelector("#cantPant").value
        if (cantPant == "" || isNaN(cantPant) || cantPant <=0) {
            alert("Ingrese una cantidad de pantallas válida");
            return false;
            }
        let costoXdia = document.querySelector("#costoXdia").value
        if (costoXdia == "" || isNaN(costoXdia) || costoXdia <=0) {
            alert("Ingrese un número válido");
            return false;
            }
        let cantVisit = document.querySelector("#cantVisit").value
        if (cantVisit =="" || isNaN(cantVisit) || cantVisit <=0) {
            alert("Ingrese una cantidad de visitantes válida");
            return false;
            }
        let precioEntrada = document.querySelector("#precioEntrada").value;
        if (precioEntrada =="" || isNaN(precioEntrada) || precioEntrada <=0) {
            alert("Ingrese un precio válido");
            return false;
        }

        const obra = {
            nombreObj: nombre,
            costoXdiaObj: Number(costoXdia),
            cantPantObj: Number(cantPant),
            cantVisitObj: Number(cantVisit),
            precioEntradaObj: Number(precioEntrada)
            }
        obras.push(obra)
        contadorObras++;
        alert(`Obra ${contadorObras} de ${cantidadTotal} ingresada correctamente`);

        vaciarFormulario();
        
        // Si ya completó todas las obras
        if (contadorObras >= cantidadTotal) {
            btnEnviar.disabled = true;
            btnCalcular.style.display = "inline-block";
            btnReset.style.display = "inline-block";
            resto.disabled = true;
        }
    }
function vaciarFormulario () {
    document.querySelector ("#cantObras").value = "";
    document.querySelector ("#nombre").value = "";
    document.querySelector ("#cantPant").value = "";
    document.querySelector ("#costoXdia").value = "";
    document.querySelector ("#cantVisit").value = "";
    document.querySelector ("#precioEntrada").value = "";
}
btnCalcular.addEventListener("click", function(e) {
    e.preventDefault();
    calcularResultado();
})
function calcularResultado(){
    let totalPantallas = 0;
    let gananciaTotal = 0;

    for (let i = 0; i < obras.length; i++) {
        let obra = obras[i];

        totalPantallas += obra.cantPantallas * obra.costoXdia * 31;

        gananciaTotal += (precioEntrada * obra.cantVisitantes) - (obra.cantPantallas * obra.costoXdia * 31);
    }

    listado.innerHTML = `
        <h2>Resultados finales</h2>
        <p>Costo total de uso de pantallas durante todo el mes: $${totalPantallas}</p>
        <p>Ganancia esperada: $${gananciaTotal}</p>
    `;
}