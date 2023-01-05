
const howToPlayCheck = document.getElementById("how-to-play-check");
const startBtn = document.getElementById("btn--start-quiz")
const quizContent = document.getElementById("quiz-container")
const questionElement = document.getElementById("question")
const answersElement = document.getElementById("answer--btns")
const nextButton = document.getElementById("next-btn")
const nextButtonArea = document.getElementsByClassName("controls")
const countDownTimer = document.getElementById("scoreboard")
const timeRemaining = document.getElementById("time")
const correctScore = document.getElementById("correct--answers")
const incorrectScore = document.getElementById("incorrect--answers")
const modalDialogue = document.getElementById("results-modal")

let correctCount = 0 
let incorrectCount = 0
let startingTime = 60
let shuffledQuestions, currentQuestionIndex

/* event listeners */

startBtn.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

/* retrieves questions and parses data to JS */ 

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
    countDownTimer.style.display = "flex"
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
    startTimer()
}

/**
 * Starts a timer
 * called during the start game function
 * timer inspired by https://stackoverflow.com/questions/10541609/make-a-countdown-from-timer
 */
function startTimer() {
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
    setTimeout(60000, "Time is up")
}

/**
 * Shows random next question 
 */
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * Displays answers for each button
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
 * Removes previous answers  
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
        countCorrectAnswers()
    } else {
        countIncorrectAnswers()
    }
}

/**
 * Counts correct answers 
 */
function countCorrectAnswers() {
    correctCount++
    correctScore.innerHTML = correctCount
}

/**
 * Counts and displays incorrect answers 
 */

function countIncorrectAnswers() {
    console.log("incorrect count function called")
    incorrectCount++
    incorrectScore.innerHTML = incorrectCount
}

/** 
 * Highlights if the selected answer is correct/incorrect 
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
 * Sets default style to answers after the next button is selected
 */
function clearStatusClass(element) {
    element.classList.remove("question--btn--correct")
    element.classList.remove("question--btn--incorrect")
}

/**
 * Displays results when the time runs out
 */
function openResultsModal() {
    modalDialogue.showModal()
}






