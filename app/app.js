const express = require('express')

const app = express()
app.use(express.json()) // Indicando que usaremosn JSON
const port = 3000


app.get('/v1/explorers', (req, res) =>{
    console.log (`API Explorers GET All request ${new Date()}`)

    const explorer1 = {id: 1, name: "Joss1"}
    const explorer2 = {id: 2, name: "Joss2"}
    const explorer3 = {id: 3, name: "Joss3"}
    const explorer4 = {id: 4, name: "Joss4"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]

    res.status(200).json(explorers) // Agregando código HTTP CODE 200 en el request
})

app.get('/v1/explorers/:id', (req, res) =>{
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 1, name: "Joss"}
    res.status(200).json(explorer)
})

app.post('/v1/explorers', (req, res) =>{
    console.log (`API explorers PORT request ${new Date()}`)
    const requestBody = req.body //Parámetos de un cliente 
    res.status(201).json({message: "Created"})
    console.log (requestBody)
})
app.listen(port, ()=>{
    console.log (`Example app listenig on port ${port}`)
})