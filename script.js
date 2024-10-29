function updateCountdown() {
    const anniversaryDate = new Date("2024-12-16T19:00:00");
    const now = new Date();
    const difference = anniversaryDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML = "¡Es el gran día!";
        return;
    }

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);

    document.getElementById("countdown").innerHTML = 
        `Faltan: ${days} días, ${hours} horas y ${minutes} minutos`;
}

function addToCalendar() {
    const event = {
        title: "40° Aniversario - Fredy & America Lopez",
        start: "20241222T190000",
        end: "20241222T000000"
    };

    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&location=${encodeURIComponent(event.location)}&dates=${event.start}/${event.end}`, '_blank');
}

function openMap() {
    window.open("https://maps.app.goo.gl/1d2PBM6pJgS9h5zk7", "_blank");
}

function confirmAssistance() {
    const phoneNumber = "50254210389"; // Reemplazar con el número real
    const message = "¡Hola! Confirmo mi asistencia a la celebración de su 40° Aniversario de Bodas.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

updateCountdown();
setInterval(updateCountdown, 60000);