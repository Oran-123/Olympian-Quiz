const openModalButton = document.getElementById("btn--how-to-play")
const closeModalButton = document.getElementById("button-close-rules-modal")
const rulesModal = document.getElementById("rules-modal")


/* the following video was used as inspiration for the modal functions https://www.youtube.com/watch?v=TAB_v6yBXIE*/ 

/**
 * Opens a modal with instructions for the quiz,
 * when the how to play button is clicked 
 */
openModalButton.addEventListener("click", () => { 
    console.log("rules modal open")
    rulesModal.showModal()  
    rulesModal.style.display= "flex"
})

/**
 * Closes the modal with instructions for the quiz,
 * when the X button is clicked 
 */
closeModalButton.addEventListener("click", () => {
    rulesModal.close() 
    rulesModal.style.display= "none"
})