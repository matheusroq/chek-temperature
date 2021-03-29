const express = require('express')
const app = express()
const fetch = require('node-fetch')
require('dotenv').config()

app.use(express.static('public'))

app.get('/check/:city', async (req, res) => {
    const city = req.params.city
    console.log(city)
    const apiKey = process.env.API_KEY
    const url = `https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${city}`
    const response = await fetch(url)
    const json = await response.json()
    res.json(json)
})
app.listen(3000, () => console.log('rodando'))