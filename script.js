const days = document.getElementById("days")
const hours = document.getElementById("hours")
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const resultado = document.querySelector(".resultados");
const notify = document.getElementById("notify");

let contador = 0;

notify.addEventListener("click", e => {
    permitirNotificaciones()
})

function permitirNotificaciones() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission()
        .then(response => {
            if (response === "granted") {
                counter()
            }
        });
    } else {
        counter()
    }
   
}

function enviarNotificacion() {
    const notificacion = new Notification("Es hoy 🎉!!! Resultados Primer Momento Beca 18 - 2024", {
            icon: "img/pronabec.png",
            body: "Revisa constantemente la página del Pronabec."
        }
    );

    notificacion.onclick = () => {
        window.open("https://www.pronabec.gob.pe/beca-18/")
    }
}

function enviarNotificacionCiertoTiempo() {
    enviarNotificacion();
    const notificationTimer = setTimeout(() => {
        counter()
        contador++;
    }, 10 * 1000);

    if (contador >= 1) {
        contador = 0;
        clearTimeout(notificationTimer)
    }
}

function counter () {
    let now = new Date().getTime();
    let resultadosPronabec = new Date("03/09/2024 16:54:00").getTime();
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
        enviarNotificacionCiertoTiempo()
    }
}



const interval = setInterval(() => {
    counter()
}, 1000);