const path = require('path')
const express = require('express')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

app.use(
    express.static(
        path.join(__dirname, '../public')
        )
    )

app.get('/help', (req,res) => {
    res.send('Help Page')
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})