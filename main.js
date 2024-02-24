
/**
 * 
 * Elementos HTML
 */


const seconds = document.querySelector("#seconds");
const minutes = document.querySelector("#minus");
const hours = document.querySelector("#hours");
const btnIconPlay = document.querySelector(".bx-play");

/**
 * 
 * Variables acumuladores
 */


let secondsT = 0;
let minutesT = 0;
let hoursT = 0;
let time;

/**
 * 
 * Empieza a el cronometro y cambia la clase del btn
 */

const startM = () => {

    if (!time) {
        time = setInterval(updateTimer, 1000);
        btnIconPlay.classList.remove("bx-play");
        btnIconPlay.classList.add("bx-stop");
    }else{
        clearInterval(time);
        time = null;
        btnIconPlay.classList.remove("bx-stop");
        btnIconPlay.classList.add("bx-play");
    }
}

/**
 * 
 * Va Contando los segundos
 */

const updateTimer = () => {
    secondsT++;
    if (secondsT === 60) {
        secondsT = 0;
        minutesT++;
        if (minutesT === 60) {
            minutesT = 0;
            hoursT ++;
        }
    }
    displayTime();
};

/**
 * 
 * Cambia la vista del html
 */
const displayTime = () => {
    hours.textContent = `${String(hoursT).padStart(2, "0")}`;
    minutes.textContent = `${String(minutesT).padStart(2, "0")}`;
    seconds.textContent = `${String(secondsT).padStart(2, "0")}`;
    return
};

/**
 * 
 * Cambia la vista del html
 */

const stopM = () => {
    clearInterval(time);
    time = null;
    secondsT = 0;
    minutesT = 0;
    hoursT = 0;
    displayTime();
}

/**
 * Agregamos Los Eventos 
 */
document.getElementById("start").addEventListener("click", startM);
document.getElementById("stop").addEventListener("click", stopM);



