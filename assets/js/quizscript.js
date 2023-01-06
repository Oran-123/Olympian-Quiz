
const howToPlayCheck = document.querySelector("#check-container");
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
const usernameForm = document.getElementById("start-quiz-form")
const homePageSections = document.querySelector("#quiz-signup")
const homeButtons = document.getElementById ("leaderboard--&--How-to-play")

let resultsMessage = document.querySelector("#results-message")
let correctCount = 0 
let incorrectCount = 0
let startingTime = 60
let shuffledQuestions, currentQuestionIndex

/* event listeners */
usernameForm.addEventListener("submit", onFormSubmission)
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
 * hides the signup form on submission
 */
function onFormSubmission (submission) {
    console.log("onSubmit form triggered") 
    homePageSections.style.display= "none"
    homeButtons.style.display = "none"
    submission.preventDefault()
    displayCheck()
}

/**
 * asks if the player has read the rules  
 */
function displayCheck () {
    howToPlayCheck.style.display = "flex";
}

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
    setInterval(function () {
        (startingTime--);
        timeRemaining.innerHTML = startingTime + "s";
        if (startingTime < 15) {
            timeRemaining.style.color = "var(--accent-red)"
        }
        if (startingTime < 1) {
            clearInterval(Interval)
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
    console.log("set next question function called successfully")
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
        deductTime()
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
 * deducts time for every wrong answer
 */
function deductTime() {
    if (startingTime < 5) {
        startingTime = startingTime - (startingTime - 1)
    } else {
    startingTime = (startingTime-5)
}
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
    resultsMessage.innerHTML = `well done you got ${correctCount} questions correct!`
}






