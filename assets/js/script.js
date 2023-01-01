let howToPlayCheck = document.getElementById("how-to-play-check");
let startBtn = document.getElementById("btn--start-quiz")


/**
 * Hides the div which asks the player if they understand the rules
 * once the player clicks on the button start quiz
 */
startBtn.onclick = function (){
    if (howToPlayCheck.style.display !== "none"){
        howToPlayCheck.style.display = "none"
    } else {
        howToPlayCheck.style.display="flex"
    }
    console.log("start quiz button clicked")
}

