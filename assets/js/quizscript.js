
const howToPlayCheck = document.getElementById("how-to-play-check");
const startBtn = document.getElementById("btn--start-quiz")
const quizContent = document.getElementById("quiz-container")
const questionElement = document.getElementById("question")
const answersElement = document.getElementById("answer--btns")
const nextButton = document.getElementById("next-btn")
const nextButtonArea = document.getElementsByClassName("controls")
const countDownTimer = document.getElementById("countdown-timer")

let shuffledQuestions, currentQuestionIndex

/* event listeners */

startBtn.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
})

/**
 * Hides the div which asks the player if they understand the rules
 * after the player clicks on the start button: 
 * displays the div that contains the quiz questions 
 * displays and starts the countdown timer 
 * */
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
function startTimer() {
    /* timer inspired by https://stackoverflow.com/questions/10541609/make-a-countdown-from-timer */
    const timeRemaining = document.getElementById("time")
    let startingTime = 1
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
 * Logs a message when a timer is finished
 */
function log(msg) {
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
    },
    {
        question: "Which city has most recently hosted a summer games?",
        answers: [{
                text: "Barcelona",
                correct: false
            },
            {
                text: "London",
                correct: false
            },
            {
                text: "Beijing",
                correct: true
            },
            {
                text: "Paris",
                correct: false
            }
        ]
    },
    {
        question: "Which city will host the 2024 summer games?",
        answers: [{
                text: "Milan",
                correct: false
            },
            {
                text: "Dublin",
                correct: false
            },
            {
                text: "Paris",
                correct: true
            },
            {
                text: "Lisbon",
                correct: false
            }
        ]
    },
    {
        question: "What is the winner of the Decathlon known as?",
        answers: [{
                text: "The World's Greatest Athlete",
                correct: true
            },
            {
                text: "The World’s Fittest Man",
                correct: false
            },
            {
                text: "The Modern Achilles",
                correct: false
            },
            {
                text: "The Worlds Fastest Man",
                correct: false
            }
        ]
    },
    {
        question: "Which city’s Olympic Stadium is known as the ‘Bird’s Nest’?",
        answers: [{
                text: "London",
                correct: false
            },
            {
                text: "Beijing",
                correct: true
            },
            {
                text: "Athens",
                correct: false
            },
            {
                text: "Paris",
                correct: false
            }
        ]
    },
    {
        question: "Which of the following is NOT an Olympic track event?",
        answers: [{
                text: "3000 meter steeplechase",
                correct: false
            },
            {
                text: "1500 meters",
                correct: false
            },
            {
                text: "800 meters hurdles",
                correct: true
            },
            {
                text: "100m sprint",
                correct: false
            }
        ]
    },
    {
        question: "Who were the Ancient Olympic Games held in honor of?",
        answers: [{
                text: "Zeus",
                correct: true
            },
            {
                text: "The dead",
                correct: false
            },
            {
                text: "The Greek people",
                correct: false
            },
            {
                text: "Mount Olympus",
                correct: false
            }
        ]
    },
    {
        question: "Which of these countries has hosted the most Olympic Games?",
        answers: [{
                text: "United Kingdom",
                correct: false
            },
            {
                text: "France",
                correct: false
            },
            {
                text: "United States",
                correct: true
            },
            {
                text: "France",
                correct: false
            }
        ]
    },
    {
        question: "English and what other language are the official languages of the Olympics?",
        answers: [{
                text: "German",
                correct: false
            },
            {
                text: "French",
                correct: true
            },
            {
                text: "Greek",
                correct: false
            },
            {
                text: "Chinese",
                correct: false
            }
        ]
    },
    {
        question: "Which of the following is not a color of an Olympic Ring?",
        answers: [{
                text: "Black ",
                correct: false
            },
            {
                text: "Red",
                correct: false
            },
            {
                text: "Orange",
                correct: true
            },
            {
                text: "Yellow",
                correct: false
            }
        ]
    },
    {
        question: "What was given to winners during the Ancient Olympics?",
        answers: [{
                text: "A medal ",
                correct: false
            },
            {
                text: "A meal",
                correct: false
            },
            {
                text: "A diamond",
                correct: false
            },
            {
                text: "An olive branch wreath",
                correct: true
            }
        ]
    },
    {
        question: "During which games did Jesse Owens win 4 gold medals?",
        answers: [{
                text: "1936 ",
                correct: true
            },
            {
                text: "1948",
                correct: false
            },
            {
                text: "1952",
                correct: false
            },
            {
                text: "1956",
                correct: false
            }
        ]
    },
    {
        question: "How many countries have hosted the summer games?",
        answers: [{
                text: "12",
                correct: false
            },
            {
                text: "15",
                correct: false
            },
            {
                text: "17",
                correct: false
            },
            {
                text: "19",
                correct: true
            }
        ]
    },
    {
        question: "Where is Usain Bolt from?",
        answers: [{
                text: "USA",
                correct: false
            },
            {
                text: "Costa Rica",
                correct: false
            },
            {
                text: "Jamaica",
                correct: true
            },
            {
                text: "Mexico",
                correct: false
            }
        ]
    },
    {
        question: "Who has won the most gold medals at the summer games?",
        answers: [{
                text: "Michael Phelps",
                correct: true
            },
            {
                text: "Usain Bolt",
                correct: false
            },
            {
                text: "Muhammad Ali",
                correct: false
            },
            {
                text: "Jesse Owens",
                correct: false
            }
        ]
    },
    {
        question: "How many gold medals has Michael Phelps won?",
        answers: [{
                text: "16",
                correct: false
            },
            {
                text: "20",
                correct: false
            },
            {
                text: "24",
                correct: false
            },
            {
                text: "28",
                correct: true
            }
        ]
    },
    {
        question: "When were the first Olympics in which all participating countries sent female athletes?",
        answers: [{
                text: "1982",
                correct: false
            },
            {
                text: "1992",
                correct: false
            },
            {
                text: "2002",
                correct: false
            },
            {
                text: "2012",
                correct: true
            }
        ]
    },
    {
        question: "What was Usain Bolts fastest 100-meter sprint?",
        answers: [{
                text: "9.38",
                correct: false
            },
            {
                text: "9.48",
                correct: false
            },
            {
                text: "9.58",
                correct: true
            },
            {
                text: "9.68",
                correct: false
            }
        ]
    },
    {
        question: "What was Usain Bolts fastest 100-meter sprint?",
        answers: [{
                text: "9.39",
                correct: false
            },
            {
                text: "9.49",
                correct: false
            },
            {
                text: "9.59",
                correct: true
            },
            {
                text: "9.69",
                correct: false
            }
        ]
    },
    {
        question: "How many sports did the 2020 Summer Olympics include?",
        answers: [{
                text: "15",
                correct: false
            },
            {
                text: "23",
                correct: false
            },
            {
                text: "25",
                correct: false
            },
            {
                text: "33",
                correct: true
            }
        ]
    },
    {
        question: "How many sports did the 2020 Summer Olympics include?",
        answers: [{
                text: "15",
                correct: false
            },
            {
                text: "23",
                correct: false
            },
            {
                text: "25",
                correct: false
            },
            {
                text: "33",
                correct: true
            }
        ]
    },
    {
        question: "Which of the following sports events were held for the first time in Olympics in Tokyo 2020?",
        answers: [{
                text: "Karate",
                correct: true
            },
            {
                text: "Rugby",
                correct: false
            },
            {
                text: "Golf",
                correct: false
            },
            {
                text: "Canoeing",
                correct: false
            }
        ]
    },
    {
        question: "Which country topped the medal list at the 2020 summer games?",
        answers: [{
                text: "USA",
                correct: true
            },
            {
                text: "China",
                correct: false
            },
            {
                text: "Russia",
                correct: false
            },
            {
                text: "Australia",
                correct: false
            }
        ]
    },
    {
        question: "In which country did the Olympics originate?",
        answers: [{
                text: "USA",
                correct: false
            },
            {
                text: "Italy",
                correct: false
            },
            {
                text: "Greece",
                correct: true
            },
            {
                text: "Turkey",
                correct: false
            }
        ]
    },
    {
        question: "In what year did the Olympic flag debut?",
        answers: [{
                text: "1920",
                correct: true
            },
            {
                text: "1930",
                correct: false
            },
            {
                text: "1940",
                correct: false
            },
            {
                text: "1950",
                correct: false
            }
        ]
    },
]