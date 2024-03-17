const calcularPuntaje = document.getElementById("calcular-pnts");
const containerCalcular = document.querySelector(".container-pntj");
const closeContainer = document.getElementById("cerrar");
const mostrarTabla = document.getElementById("mostrar-tabla");
const imgFoto = document.getElementById("foto");
const mostrarResultado = document.getElementById("calcular-puntaje");
const containerDiv = document.querySelector(".mostrar-resultados");
const countdown = document.querySelector(".countdown")
const ps = document.getElementById("ps").value;
const c = document.getElementById("c").value;
const g = document.getElementById("g").value;
const s = document.getElementById("s").value;
const t = document.getElementById("t").value;
const total = document.getElementById("total");

calcularPuntaje.addEventListener("click", e => {
    imgFoto.src = "img/puntajes-tabla.png";


    countdown.style.display = "none"
    containerCalcular.style.display = "block"
});

closeContainer.addEventListener("click", () => {
    countdown.style.display = "flex"
    containerCalcular.style.display = "none"

    imgFoto.src = "img/foto.webp";
    containerCalcular.reset();
    const info = document.querySelector(".resultado-pnts");
    if (info) {
        info.remove()
    }
});

mostrarResultado.addEventListener("click", (e) => {
    e.preventDefault()
    llenarInputs()
});



function llenarInputs() {
    const infoObjt = {
        ps:  document.getElementById("ps").value,
        c: document.getElementById("c").value,
        g: document.getElementById("g").value,
        s: document.getElementById("s").value,
        t: document.getElementById("t").value
    }

    if(Object.values(infoObjt).includes('') ) {
        mostrarError("Por favor agregue todos los campos")
        return;
    }
    if (infoObjt.ps < 0) {
        mostrarError("Entra no válida, no se permiten número negativos")
        return;
    }
    
    mostrarResults(infoObjt)
}

function mostrarResults(info) {
    eliminarElementoPrevio()
    const {ps,c,g,s,t} = info;
    const resultado = +ps + +c + +g + +s + +t;
    total.value = resultado;

    const div = document.createElement("div");
    div.classList.add("resultado-pnts");
    const p = document.createElement("p");
    p.innerHTML = `Felicidades!!! 🎉 Tu puntaje total es de : <span>${resultado} pnts </span> `

    div.appendChild(p);
    containerDiv.appendChild(div)
}

function mostrarError(mensaje) {
    const duplicadoError = document.querySelector(".error");
    if (duplicadoError) {
        duplicadoError.remove()
    }

    const error = document.createElement("div");
    error.textContent = mensaje;
    error.classList.add("error");
    containerDiv.appendChild(error)

    setTimeout(() => {
        error.remove();
    }, 3000);
}

function eliminarElementoPrevio() {
    const borrarElemento = document.querySelector(".resultado-pnts");
    if (borrarElemento) borrarElemento.remove()
}




