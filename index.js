const express = require('express')
const dummyData = require('./dummy')
const cors = require("cors")

const app = express()

const HOST = 'http://localhost'
const PORT = 8888

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.get('/', cors(), async (req,res) => {
    res.send('Kevin Owen soccer api')
})

app.get('/team', cors(), async (req,res) => {
    res.status(200).json(dummyData)
})

app.get('/home', cors(), async (req, res) => {
    res.send("data for home")
})

app.post('/post_team', async (req, res) => {
    let { teamData } = req.body
    console.log(teamData)
})


app.listen(PORT, () => {
    console.log(`API running at ${HOST}:${PORT}!`)
})