let obras = [];//Pongo que la cantidad de obras sea undefined, ya que el usuario es quien la define
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
            nombre: nombre,
            costoXdia: Number(costoXdia),
            cantPant: Number(cantPant),
            cantVisit: Number(cantVisit),
            precioEntrada: Number(precioEntrada)
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
btnReset.addEventListener("click", function(e){
    e.preventDefault();
    vaciarFormulario();
})
function calcularResultado(){
    let totalPantallas = 0;
    let gananciaTotal = 0;

//Recorro el objeto con for
    for (let i = 0; i < obras.length; i++) {
        let obra = obras[i];
//Calculo el total de pantallas
        totalPantallas += obra.cantPant * obra.costoXdia * 31;
//Calculo la ganancia total
        gananciaTotal += (obra.precioEntrada * obra.cantVisit) - (obra.cantPant * obra.costoXdia * 31);
        let textoGanancia = "";
    let claseColor = "";

    if (gananciaTotal >= 0) {
        textoGanancia = `Ganancia esperada: $${gananciaTotal}`;
        claseColor = "color: green;";
    } else {
        textoGanancia = `Pérdida esperada: $${Math.round(gananciaTotal)}`;
        claseColor = "color: red;";
    }
//Ubico obra más cara
    if (obras.length === 0) return;
    let obraMasCara = obras[0];// Suponemos que la primera es la más cara

    for (let i = 0; i < obras.length; i++) {
        let obra = obras[i];

        // Calculamos el costo mensual de esta obra
        let costoMensual = obra.costoXdia * 31;

        // Comparamos para encontrar la más cara
        if (obra.costoXdia > obraMasCara.costoXdia) {
            obraMasCara = obra;
        }
    }
    const costoMensualMasAlto = obraMasCara.costoXdia * 31;
    // Mostrar resultado
    listado.innerHTML = `
        <h3>Resultados finales</h3>
        <p><strong>Total costo de pantallas (mes):</strong> $${totalPantallas}</p>

        <p style="${claseColor}"><strong>${textoGanancia}</strong></p>

        <h3>Obra más cara por día:</h3>
        <p><strong>${obraMasCara.nombre}</strong></p>
        <p>Costo por día: $${obraMasCara.costoXdia}</p>
        <p>Costo mensual (31 días): $${costoMensualMasAlto}</p>
    `;
    }
}