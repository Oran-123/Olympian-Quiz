const openModalButton = document.querySelector("#btn-how-to-play")
const closeModalButton = document.querySelector("#button-close-rules-modal")
const rulesModal = document.querySelector("#rules-modal")


/* the following video was used as inspiration for the modal functions https://www.youtube.com/watch?v=TAB_v6yBXIE*/ 

/**
 * Opens a modal with instructions for the quiz,
 * when the how to play button is clicked 
 */
openModalButton.addEventListener("click", () => { 
    console.log("rules modal open")
    rulesModal.showModal()  
})

/**
 * Closes the modal with instructions for the quiz,
 * when the X button is clicked 
 */
closeModalButton.addEventListener("click", () => {
    rulesModal.close() 
})