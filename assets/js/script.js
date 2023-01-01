let howToPlayCheck = document.getElementById("how-to-play-check");
let startBtn = document.getElementById("btn--start-quiz")
let quizContent = document.getElementById("quiz-container")

/* function inspired by https://sebhastian.com/javascript-show-hide-div-onclick-toggle/#:~:text=To%20display%20or%20hide%20a,which%20is%20block%20)%20to%20none%20.*/

/**
 * Hides the div which asks the player if they understand the rules
 * once the player clicks on the button start quiz
 */
startBtn.onclick = function (){
    if (howToPlayCheck.style.display !== "none"){
        quizContent.style.display = "flex"
        howToPlayCheck.style.display = "none";
    } else {
        quizContent.style.display = "none"
        howToPlayCheck.style.display="flex";
    }
    console.log("start quiz button clicked")
    }