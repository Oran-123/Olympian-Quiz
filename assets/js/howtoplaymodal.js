const openModalButton = document.getElementById("btn--how-to-play")
const closeModalButton = document.getElementById("button-close-rules-modal")
const rulesModal = document.getElementById("rules-modal")
const usernameForm = document.querySelector("#start-quiz-form")
const homePageSections = document.getElementsByClassName("sections")

usernameForm.addEventListener("submit", onFormSubmission)

/**
 * hides the signup form on submission
 */
function onFormSubmission () {
    console.log("onSubmit form triggered") 
    homePageSections.style.display= "none"
    
    }

/* the following video was used as inspiration for the modal functions https://www.youtube.com/watch?v=TAB_v6yBXIE*/ 

/**
 * Opens a modal with instructions for the quiz,
 * when the how to play button is clicked 
 */
openModalButton.addEventListener("click", () => { 
    rulesModal.showModal()  
})

/**
 * Closes the modal with instructions for the quiz,
 * when the X button is clicked 
 */
closeModalButton.addEventListener("click", () => {
    rulesModal.close() 
})