fetch ("assets/data/questions.json") 
    .then (response => response.json)
    .then ( data=> {
        questions=data
    })
    .then (console.log(questions))