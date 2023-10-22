const path = require('path')
const express = require('express')
const hbs = require('hbs')

console.log(__dirname)
console.log(path.join(__dirname, '../public'))

const app = express()

// Paths
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialssPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and folder locations
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialssPath)

// Express setup for static pages
app.use( express.static(publicPath) )

// Paths

app.get('', (req,res)=>{
    res.render('index', {
        title:'Home'
    })
})

app.get('/about', (req,res)=>{
    res.render('about', {
        title:'About'
    })
})

//Test, remove when complete
app.get('/api', (req,res) => {
    res.send({
        forcastt: 'Sunny',
        location: 'Orlando, FL'
    })
})

//Redirect to About '/'
app.get('/about*', (req,res)=>{
    res.redirect('/about')
})

//Redirect to Home '/'
app.get('*', (req,res)=>{
    res.redirect('/')
})

// Listen on specified port
app.listen(3000, () => {
    console.log('Server started on port 3000')
})