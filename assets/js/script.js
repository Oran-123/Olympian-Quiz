let howToPlayCheck = document.getElementById("how-to-play-check");
let startBtn = document.getElementById("btn--start-quiz")

startBtn.onclick = function (){
    if (howToPlayCheck.style.display !== "none"){
        howToPlayCheck.style.display = "none"
    } else {
        howToPlayCheck.style.display="flex"
    }
}

