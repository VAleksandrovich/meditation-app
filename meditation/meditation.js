const timer = 2;
let amountTime = timer * 60;

function showTimer () {
    const countdown = document.querySelector ("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;


    if ( seconds < 2) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

if ( amountTime < 2) {
    stopTimer ();
    amountTime = 0;
}

function stopTimer () {
    clearInterval()
}

}

let timerId = setInterval (showTimer, 1000);
