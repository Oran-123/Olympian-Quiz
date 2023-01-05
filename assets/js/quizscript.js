
const howToPlayCheck = document.getElementById("how-to-play-check");
const startBtn = document.getElementById("btn--start-quiz")
const quizContent = document.getElementById("quiz-container")
const questionElement = document.getElementById("question")
const answersElement = document.getElementById("answer--btns")
const nextButton = document.getElementById("next-btn")
const nextButtonArea = document.getElementsByClassName("controls")
const countDownTimer = document.getElementById("countdown-timer")
const timeRemaining = document.getElementById("time")
let startingTime = 60

let shuffledQuestions, currentQuestionIndex

/* event listeners */

startBtn.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

fetch ("assets/data/questions.json") 
    .then (response => response.json())
    .then (data => {
          questions = data
          console.log(questions)
    })

/**
 * Hides/displays content when the quiz is started 
 * function inspired by https://sebhastian.com/javascript-show-hide-div-onclick-toggle/#:~:text=To%20display%20or%20hide%20a,which%20is%20block%20)%20to%20none%20.
 * */
function startGame() {
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
function startTimer() {
    /* timer inspired by https://stackoverflow.com/questions/10541609/make-a-countdown-from-timer */
    
    const timer = setInterval(function () {
        (startingTime--);
        timeRemaining.innerHTML = startingTime + "s";
        if (startingTime < 15) {
            timeRemaining.style.color = "var(--accent-red)"
        }
        if (startingTime < 1) {
            clearInterval(timer)
        }
        if (startingTime == 0) {
            openResultsModal()
        }
    }, 1000);
    setTimeout(log, 60000, "Time is up")
    console.log("Timer started")
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
        const button = document.createElement('button')
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
    nextButton.classList.add("hide")
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
    if (correct) {
        nextButton.classList.remove('hide')
    }
}

/**
 * For the selected div checks if the data-type is correct,
 * and sets a class depending on the result 
 */
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("question--btn--correct")
    } else {
        element.classList.add("question--btn--incorrect")
    }
}

/**
 * removes the correct/incorrect class from the answer buttons
 */
function clearStatusClass(element) {
    element.classList.remove("question--btn--correct")
    element.classList.remove("question--btn--incorrect")
}

/**
 * When called by the startTimer function this will:
 * 1. present the modal
 * 2. allow users to close the modal
 */
function openResultsModal() {
    const modalDialogue = document.getElementById("results-modal")
    modalDialogue.showModal()
}






