function startTimer() {
    timer = setInterval(stopWatch, 100)
}

function stopTimer() {
    clearInterval(timer);
}

function restartTimer() {
    stopTimer();
    m = 0;
    s = 0;
    ms = 0;
    show();
}

function stopWatch(action) {
    ms++;

    if (ms === 10) {
        ms = 0;
        s++;
    }

    if (s === 60) {
        s = 0;
        m++;
    }
    
    msDisplay = ms.toString();
    sDisplay = s.toString();
    mDisplay = m.toString();
    
    document.getElementById("display").innerHTML = `${mDisplay}:${sDisplay}:${msDisplay}`;
 
}
