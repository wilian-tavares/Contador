"use strict";

let seconds = 0;
let minutes = 25;
let tempo = 1000;

let cron;

let minuteFormat = (minutes < 10 ? '0' + minutes : minutes);
let secondFormat = (seconds < 10 ? '0' + seconds : seconds);

const audio = new Audio('alarme.wav');


document.getElementById('minutes').innerHTML = minutes + ':';
document.getElementById('seconds').innerHTML = seconds + '0';



function changeTime_25() {
    reset()
    minutes = 25;
    document.getElementById('break').innerHTML = '';
    document.getElementById('minutes').innerHTML = minutes + ':';
    document.getElementById('seconds').innerHTML = seconds + '0';

}

function changeTime_15() {
    reset()
    minutes = 15;
    document.getElementById('break').innerHTML = '';
    document.getElementById('minutes').innerHTML = minutes + ':';
    document.getElementById('seconds').innerHTML = seconds + '0';
}

function shortBreak() {
    reset();
    minutes = 10;

    document.getElementById('break').innerHTML = 'BREAK';

    document.getElementById('minutes').innerHTML = minutes + ':';
    document.getElementById('seconds').innerHTML = seconds + '0';


}

function start() {
    cron = setInterval(() => timer(), tempo)

}

function pause() {
    clearInterval(cron)
}

function reset() {
    clearInterval(cron)
    minutes = 25;
    seconds = 0;

    let minuteFormat = (minutes < 10 ? '0' + minutes : minutes);
    let secondFormat = (seconds < 10 ? '0' + seconds : seconds);

    document.getElementById('minutes').innerHTML = minuteFormat + ':';
    document.getElementById('seconds').innerHTML = secondFormat;
}

function timer() {
    let minuteFormat = (minutes < 10 ? '0' + minutes : minutes);
    let secondFormat = (seconds < 10 ? '0' + seconds : seconds);

    document.getElementById('minutes').innerHTML = minuteFormat + ':';
    document.getElementById('seconds').innerHTML = secondFormat;

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            clearInterval(cron)
            document.getElementById('minutes').innerHTML = '00:';
            document.getElementById('seconds').innerHTML = '00';


            audio.play()

        }
    }


}