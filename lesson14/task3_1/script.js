window.addEventListener("load", () => {
    window.setInterval(() => {
        let date = new Date();

        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        document.querySelector(
            ".clock"
        ).innerHTML = `<span class="hours">${hours}</span> : <span class="minutes">${minutes}</span> : <span class="seconds">${seconds}</span>`;
    }, 1000);
});
