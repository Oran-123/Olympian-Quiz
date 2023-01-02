let howToPlayCheck = document.getElementById("how-to-play-check");
let startBtn = document.getElementById("btn--start-quiz")
let quizContent = document.getElementById("quiz-container")
let questionElement = document.getElementById("question")
let answersElement = document.getElementById("answer--btns")
let nextButton = document.getElementById("next-btn")
let nextButtonArea = document.getElementsByClassName("controls")
let countDownTimer = document.getElementById("countdown-timer")

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

/**
 * Hides the div which asks the player if they understand the rules
 * once the player clicks on the button start quiz
 */

function startGame() {
/* function inspired by https://sebhastian.com/javascript-show-hide-div-onclick-toggle/#:~:text=To%20display%20or%20hide%20a,which%20is%20block%20)%20to%20none%20.*/
    console.log("start quiz button clicked")
    quizContent.style.display = "flex"
    howToPlayCheck.style.display = "none";
    countDownTimer.style.display = "block"
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    startTimer()
}

/**
 * Starts a timer
 * called during the start game function
 */

function startTimer () {
    let timeRemaining = document.getElementById("time")
    let startingTime = 60 
    let timer = setInterval(function() {
        (startingTime--);
        timeRemaining.innerHTML = startingTime + "s";
        if (timeRemaining < 1){
            clearInterval(timer)
        }
    }, 1000);
    setTimeout(log,60000,"Time is up")
    console.log("Timer started")
}

/**
 * Logs a message when a timer is finished
 */

function log (msg){
    console.log(msg)
}

/**
 * Shows random next question 
 */

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * creates buttons for each answer 
 * sets class and data-type
 */

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

/**
 * hides previous answer buttons 
 */
function resetState() {
    nextButton
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

/**
 * for the div currently select calls the function setStatusClass 
 */

function selectAnswer(e) {
    let selectedButton = e.target
    let correct = selectedButton.dataset.correct
    setStatusClass(selectedButton, correct)
    if (shuffledQuestions.length <= currentQuestionIndex + 1) {
        nextButtonArea.style.display("none")
}
}

/**
 * For the selected div checks if the data-type is correct,
 * and sets a class depending on the result 
 */

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("question--btn--correct")
    } else {
        element.classList.add("question--btn--incorrect")
    }
}

/**
 * removes the correct/incorrect class from the answer buttons
 */

function clearStatusClass(element){
    element.classList.remove("question--btn--correct")
    element.classList.remove("question--btn--incorrect")
}

function resultsModal () {
    
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