'use strict'
require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3030

app.get('/', (req, res) => {
    res.status(200).send("😜 تفضل عالمعرض")
})
app.use(express.static("./public"));

function start() {
    app.listen(PORT, () => {

        console.log(`Here I am Standing in 🤪 ${PORT}`)
    })

}





module.exports = {
    start: start,
}