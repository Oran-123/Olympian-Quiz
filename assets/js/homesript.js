const openModalButton = document.getElementById("button-open-rules-modal")
const closeModalButton = document.getElementById("button-close-rules-modal")
const rulesModal = document.getElementById("rules-modal")

openModalButton.addEventListener("click", () => { 
    rulesModal.showModal()  
})

