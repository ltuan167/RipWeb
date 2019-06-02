var remainSecond = 0;
function setTimer(timeoutInSeconds) {
    remainSecond = timeoutInSeconds;
}

function countDown(onCountDown, onEnd) {
    if (remainSecond > 0)
        setTimeout(() => {
            remainSecond--; // count down
            onCountDown(remainSecond);
            countDown(onCountDown, onEnd)
        }, 1000);
    else
        onEnd();
}