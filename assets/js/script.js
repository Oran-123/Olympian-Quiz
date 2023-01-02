let howToPlayCheck = document.getElementById("how-to-play-check");
let startBtn = document.getElementById("btn--start-quiz")
let quizContent = document.getElementById("quiz-container")


startBtn.addEventListener("click",startGame)
/* function inspired by https://sebhastian.com/javascript-show-hide-div-onclick-toggle/#:~:text=To%20display%20or%20hide%20a,which%20is%20block%20)%20to%20none%20.*/

/**
 * Hides the div which asks the player if they understand the rules
 * once the player clicks on the button start quiz
 */

    function startGame() {
        quizContent.style.display = "flex"
        howToPlayCheck.style.display = "none";
        console.log("start quiz button clicked")
        setNextQuestion()
        }

    function setNextQuestion() {

    }

    function selectAnswer() {

    }

const questions = [ 
    {
        question:"what is X",
        answers: [ 
            {text: "This is the correct answer", correct: true},
            {text:"This is the incorrect answer", correct:false}
        ]
    }
]