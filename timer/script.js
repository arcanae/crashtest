getTime();

function getTime() {
    now = new Date();
    y2k = new Date("Sep 28 2017 14:00:00");
    days = (y2k - now) / 1000 / 60 / 60 / 24;
    daysRound = Math.floor(days);
    if (daysRound < 10) {
        daysRound = daysRound.toString();
        daysRound = "0" + daysRound;
    }
    hours = (y2k - now) / 1000 / 60 / 60 - (24 * daysRound);
    hoursRound = Math.floor(hours);
    if (hoursRound < 10) {
        hoursRound = hoursRound.toString();
        hoursRound = "0" + hoursRound;
    }
    minutes = (y2k - now) / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
    minutesRound = Math.floor(minutes);
    if (minutesRound < 10) {
        minutesRound = minutesRound.toString();
        minutesRound = "0" + minutesRound;
    }
    seconds = (y2k - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
    secondsRound = Math.round(seconds);
    if (secondsRound < 10) {
        secondsRound = secondsRound.toString();
        secondsRound = "0" + secondsRound;
    }
    document.querySelector("#days").textContent = daysRound + ":";
    document.querySelector("#days").textContent += hoursRound + ":";
    document.querySelector("#days").textContent += minutesRound + ":";
    document.querySelector("#days").textContent += secondsRound;

    newtime = window.setTimeout("getTime();", 1000);
}