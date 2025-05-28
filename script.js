let clocktiming = document.getElementById("clock");
function updatetime() {
    let now = new Date()
    let hours = now.getHours()
    let min = now.getMinutes()
    let sec = now.getSeconds()

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let ampm = hours >= 12 ? "PM" : "AM"

    hours=hours%12||12;

    const clock = `${hours}:${min}:${sec}:${ampm}`

    clocktiming.innerHTML = clock
}

setInterval(updatetime, 1000);
updatetime();
