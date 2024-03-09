const days = document.getElementById("days")
const hours = document.getElementById("hours")
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const resultado = document.querySelector(".resultados");
const notify = document.getElementById("notify");

document.addEventListener("DOMContentLoaded", e => {
    permitirNotificaciones()
});

notify.addEventListener("click", e => {
    permitirNotificaciones()
})

function permitirNotificaciones() {
    Notification.requestPermission()
    .then(response => {
        if (response) return counter();
    });
}

function enviarNotificacion() {
    const notificacion = new Notification("Resultados Beca 18 - 2024", {
            icon: "img/pronabec.png",
            body: "Revisa constantemente la plataforma del Pronabec"
        }
    );

    notificacion.onclick = () => {
        window.open("https://www.pronabec.gob.pe/beca-18/")
    }
}

function enviarNotificacionCiertoTiempo() {
    const fechaResultados = new Date("03/21/2024 09:00:00");
    console.log(fechaResultados)
}

function counter () {
    let now = new Date().getTime();
    let resultadosPronabec = new Date("03/21/2024 09:00:00").getTime();
    let fechaRestante = resultadosPronabec - now;
    
    let dias = Math.floor(fechaRestante / (1000 * 60 * 60 * 24));
    let horas = Math.floor((fechaRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutos = Math.floor((fechaRestante % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((fechaRestante % (1000 * 60)) / 1000);

    dias = dias < 10 ? "0" + dias : dias;
    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    days.textContent = dias;
    hours.textContent = horas;
    min.textContent = minutos;
    sec.textContent = segundos;

    if (fechaRestante <= 0) {
        clearInterval(interval)
        resultado.style.display = "flex";
        enviarNotificacion();
    }
}



const interval = setInterval(() => {
    counter()
}, 1000);