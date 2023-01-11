// Form Variables
const signupFormRef = document.querySelector(`#start-quiz-form`)
const signupSectionRef = document.querySelector(`#quiz-signup`)
const userNameValueRef = document.querySelector('#uname').value

// How to play content 
const checkContainerRef = document.querySelector(`#check-container`)
const quizStartButtonRef = document.querySelector(`#btn-start-quiz`)
const howToPlayTitleRef = document.querySelector(`#how-to-play-title`)

// Rules Modal
const closeModal = document.querySelector(`#button-close-results-modal`)

// Quiz questions
const quizContent = document.querySelector(`#quiz-container`)
const questionText = document.querySelector(`#question`)

// Quiz answesr
const answerButtonRef = document.querySelector(`#answer-btns`)
const allAnswerButtonsRef = array.from(querySelectorAll(".question-btn"))

// Quiz Controls
const nextButton = document.querySelector(`#next-btn`)
const nextButtonArea = document.querySelector(`#controls`)

// Quiz scorboard 
const countDownTimer = document.querySelector(`#scoreboard`)
const timeRemaining = document.querySelector(`#time`)
const correctScore = document.querySelector(`#correct-answers`)
const incorrectScore = document.querySelector(`#incorrect-answers`)

// Results modal
const resultsModal = document.querySelector(`#results-modal`)

// Game varriables
let resultsMessage = document.querySelector(`#results-message`)
let correctCount = 0
let incorrectCount = 0
let startingTime = 60
let quizAward = document.querySelector(`#results-icon`)
let shuffledQuestions
let currentQuestionIndex

//Scoreboard varriables 
let originalColor = timeRemaining.style.color;
let originalBackgroundColor = timeRemaining.style.backgroundColor;
let originalTimeRemaining = timeRemaining.textContent

// event listeners 
signupFormRef.addEventListener(`submit`, hideQuizSignup)
quizStartButtonRef.addEventListener(`click`, startGame)
nextButton.addEventListener(`click`, () => {
    currentQuestionIndex++
    setNextQuestion()
})
closeModal.addEventListener(`click`, returnHome)

// retrieves questions and parses data to JS

fetch(`assets/data/questions.json`)
    .then(response => response.json())
    .then(data => questions = data)

/**
 * hides the signup form on submission
 */
function hideQuizSignup(submission) {
    submission.preventDefault()
    signupSectionRef.style.display = `none`
    displayCheck()
}

/**
 * asks if the player has read the rules  
 */
function displayCheck() {
    checkContainerRef.style.display = `flex`;
    howToPlayTitleRef.innerHTML = `${userNameValueRef} Before you play!`
}

/**
 * Hides/displays content when the quiz is started 
 * function inspired by 
 * https://sebhastian.com/javascript-show-hide-div-onclick-toggle/
 * */
function startGame() {
    quizContent.style.display = `flex`
    checkContainerRef.style.display = `none`;
    countDownTimer.style.display = `flex`
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
    const countDownTimer = setInterval(function () {
        (startingTime--);
        timeRemaining.innerHTML = startingTime + `s`;
        if (startingTime < 15) {
            timeRemaining.style.color = `var(--accent-red)`
        }
        if (startingTime <= 0) {
            clearInterval(countDownTimer)
            openResultsModal()
        }
    }, 1000);
    setTimeout(60000, `Time is up`)
}

/**
 * Shows random next question 
 */
function setNextQuestion() {
    resetQuiz()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * Displays answers for each button
 */
function showQuestion(question) {
    questionText.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add(`question-btn`)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener(`click`, selectAnswer)
        answerButtonRef.appendChild(button)
    });
}

/**
 * Removes previous answers  
 */
function resetQuiz() {
    nextButton.classList.add(`hide`)
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild)
    }
}

/**
 * for the div currently select calls the function setStatusClass 
 */
function selectAnswer(buttonClicked) {
    let selectedButton = buttonClicked.target
    let correct = selectedButton.dataset.correct
    highlightAnswer(selectedButton, correct)
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
        startingTime = (startingTime - 5)
    }
    highlightDeductedTime()
}

/**
 * highlights when time is deducted
 */
function highlightDeductedTime() {
    timeRemaining.style.backgroundColor = `var(--accent-red)`
    timeRemaining.style.color = `var(--primary-white)`
    timeRemaining.innerHTML = `- 5s`
    setTimeout(function () {
        timeRemaining.style.color = originalColor;
        timeRemaining.style.backgroundColor = originalBackgroundColor;
        timeRemaining = originalTimeRemaining
    }, 1000);
}

/** 
 * Highlights if the selected answer is correct/incorrect 
 */
function highlightAnswer(button, correct) {
    clearHighlightedAnswer(button)
    if (correct) {
        button.classList.add(`question-btn-correct`)
    } else {
        button.classList.add(`question-btn-incorrect`)
    }
}

/**
 * Sets default style to answers after the next button is selected
 */
function clearHighlightedAnswer(button) {
    button.classList.remove(`question-btn-correct`, `question-btn-incorrect`)
}

/**
 * Displays results when the time runs out
 */
function openResultsModal() {
    resultsModal.showModal()
    if (correctCount <= 5) {

        resultsMessage.innerHTML = `Better luck next time, you only got <strong>${correctCount}</strong> 
    questions correct! You lost <strong>${incorrectCount * 5}s</strong> because you answer <strong>${incorrectCount}</strong> questions wrong`

        quizAward.style.color = `#967444`

    } else if (correctCount > 5 && correctCount < 10) {

        resultsMessage.innerHTML = `Well done you did better then average but there is still room to improve, you got <strong>${correctCount}</strong> 
        questions correct! You lost <strong>${incorrectCount * 5}s</strong> because you answer <strong>${incorrectCount}</strong> questions wrong`

        quizAward.style.color = `#CCCCCC`

    } else if (correctCount >= 10) {

        resultsMessage.innerHTML = `Excellent you know your stuff, you got <strong>${correctCount}</strong> questions correct! You lost 
        <strong>${incorrectCount * 5}s</strong> because you answer <strong>${incorrectCount}</strong> questions wrong`

        quizAward.style.color = `#E69900`
    }
}

function returnHome() {
    window.location = (`index.html`)
}