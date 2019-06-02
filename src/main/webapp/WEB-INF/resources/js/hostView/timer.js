var remainSecond = 0;
var running = false;
function setTimer(timeoutInSeconds) {
    running = true;
    remainSecond = timeoutInSeconds;
}

function stopTimer() {
    running = false;
}

function countDown(onCountDown, onEnd) {
    if (!running)
        return;
    if (remainSecond > 0)
        setTimeout(() => {
            onCountDown(remainSecond);
            remainSecond--; // count down
            countDown(onCountDown, onEnd)
        }, 1000);
    else
        onEnd();
}