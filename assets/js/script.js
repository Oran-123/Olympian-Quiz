let howToPlayCheck = document.getElementById("how-to-play-check");
let startBtn = document.getElementById("btn--start-quiz")
let quizContent = document.getElementById("quiz-container")
let questionElement = document.getElementById("question")
let answersElement = document.getElementById("answer--btns")
let nextButton = document.getElementById("next-btn")
let nextButtonArea = document.getElementsByClassName("controls")

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})
/* function inspired by https://sebhastian.com/javascript-show-hide-div-onclick-toggle/#:~:text=To%20display%20or%20hide%20a,which%20is%20block%20)%20to%20none%20.*/

/**
 * Hides the div which asks the player if they understand the rules
 * once the player clicks on the button start quiz
 */

function startGame() {
    console.log("start quiz button clicked")
    quizContent.style.display = "flex"
    howToPlayCheck.style.display = "none";
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    startTimer()
}

function startTimer () {
    setTimeout(log,60000,"Time is up")
    console.log("Timer started")
}

function log (msg){
    console.log(msg)
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("question--btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answersElement.appendChild(button)

    });
}

function resetState() {
    nextButton
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(selectedButton, correct)
    if (shuffledQuestions.length <= currentQuestionIndex + 1) {
        nextButtonArea.style.display("none")
}
}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("question--btn--correct")
    } else {
        element.classList.add("question--btn--incorrect")
    }
}

function clearStatusClass(element){
    element.classList.remove("question--btn--correct")
    element.classList.remove("question--btn--incorrect")
}

const questions = [{
    question: "How often are the olympic games held?",
    answers: [{
            text: "4 years",
            correct: true
        },
        {
            text: "2 years",
            correct: false
        },
        {
            text: "6 years",
            correct: false
        },
        {
            text: "8 years",
            correct: false
        }
    ]
}]