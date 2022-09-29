import express from 'express'
import * as dotenv from 'dotenv'

dotenv.config('.env')

const app = express()

app.get('/', (req, res) => {
    res.send('This is base path')
})

app.get('/greeting', (req, res) => {
    res.json({ message: 'Hi, this is my simple Node.js'})
})


app.listen(process.env.PORT, () => {
    console.log(`server started on http://localhost:${process.env.PORT}`)
})