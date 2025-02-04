const digitalElement = document.querySelector('.digital');
const sElement = document.querySelector('.p_s');
const mElement = document.querySelector('.p_m');
const hElement = document.querySelector('.p_h');

function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    // Atualiza o relógio digital
    digitalElement.textContent = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;

    // Calcula os ângulos dos ponteiros
    const sDeg = (360 / 60) * second - 90;
    const mDeg = (360 / 60) * minute - 90;
    const hDeg = calculateHourAngle(hour, minute);

    // Aplica as rotações aos ponteiros
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function calculateHourAngle(hour, minute) {
    const baseAngle = (360 / 12) * hour - 90; // Ângulo base para a hora
    const minuteOffset = (360 / 12) * (minute / 60); // Ajuste para os minutos
    return baseAngle + minuteOffset; // Retorna o ângulo ajustado
}

// Inicia o relógio e atualiza a cada segundo
setInterval(updateClock, 1000);
updateClock(); // Chama imediatamente para evitar delay inicial