const openModalButton = document.getElementById("btn--how-to-play")
const closeModalButton = document.getElementById("button-close-rules-modal")
const rulesModal = document.getElementById("rules-modal")

openModalButton.addEventListener("click", () => { 
    rulesModal.showModal()  
})

closeModalButton.addEventListener("click", () => {
    rulesModal.close() 
})