let howToPlayCheck = document.getElementById("how-to-play-check");
let startBtn = document.getElementById("btn--start-quiz")
let quizContent = document.getElementById("quiz-container")
let questionElement = document.getElementById("question")
let answersElement = document.getElementById("answer--btns")
let nextButton = document.getElementById("next-btn")

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener("click", startGame)
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
    nextButton.classList.add("hide")
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    Array.from(answersElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
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
    question: "what is X",
    answers: [{
            text: "This is the correct answer",
            correct: true
        },
        {
            text: "This is the incorrect answer",
            correct: false
        }
    ]
}]