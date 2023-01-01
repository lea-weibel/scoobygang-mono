const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

mongoose
    .connect(
        'mongodb://mongodb:27017/deployment',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get('/', (req, res) => {
    res.send('You\'ve reached the Dockerized Project API!')
})

app.get('/hello', (req, res) => {
    res.send('Coucou !')
})

app.listen((5000), () => {
    console.log(`App listening on port 5000!`)
})