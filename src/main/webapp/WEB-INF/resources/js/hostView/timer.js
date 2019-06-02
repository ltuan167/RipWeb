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
            remainSecond--; // count down
            onCountDown(remainSecond);
            countDown(onCountDown, onEnd)
        }, 1000);
    else
        onEnd();
}