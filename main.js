


const seconds = document.querySelector("#seconds")
const minutes = document.querySelector("#minus")
const hours = document.querySelector("#hours")

let secondsT = 0
let minutesT = 0
let hoursT = 0
let time;

const startM = () => {
    if (!time) {
        time = setInterval(updateTimer, 10000);
    }
}

const updateTimer = () => {
    secondsT++;
    if (secondsT === 60) {
        secondsT = 0;
        minutesT++;
        if (minutesT === 60) {
            minutesT = 0
            hoursT ++
        }
    }
    displayTime();
};

const displayTime = () => {
    hours.textContent = String(hoursT).padStart(2, "0");
    minutes.textContent = String(minutesT).padStart(2, "0");
    seconds.textContent = String(secondsT).padStart(2, "0");
};


const stopM = () => {
    clearInterval(time);
    time = null;
    secondsT = 0
    minutesT = 0
    hoursT = 0
    displayTime()
}

document.getElementById("start").addEventListener("click", startM);
document.getElementById("stop").addEventListener("click", stopM);



