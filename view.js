show();
function show() {
    app.innerHTML = "";

    let header = document.createElement("h1");
    header.innerHTML = "Stoppeklokke";
    header.innerHTML += '<i class="fas fa-stopwatch"></i>';
    
    app.appendChild(header);

    let div = document.createElement("div");
    div.setAttribute("id", "display")
    div.innerHTML = `${m}:${s}:${ms}`;
    app.appendChild(div);
    
    let buttonArray = ["Start", "Restart"];
    
    for (let i = 0; i < buttonArray.length; i++) {
        const btn = document.createElement('button');
        btn.innerHTML = buttonArray[i];
        
        btn.onclick = startStop => { // start, stop, reset
            if (buttonArray[i] === "Start") { // Hvis du trykker på start, så starter timeren.. og legge til stop tekst istedenfor
                startTimer();
                buttonArray[i] = "Stop";
                // STOP TIMER
            }
            else if (buttonArray[i] === "Stop") {
                stopTimer();
                buttonArray[0] = "Start";
                // START TIMER
            }
            else if (buttonArray[i] === "Restart") {
                restartTimer()
                
            }
            btn.innerHTML = buttonArray[i];
        }
        app.appendChild(btn);
    }
    
}