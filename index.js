//IMPORTS
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const pessoas = require('./routes/pessoas')
const model = require('./models/index')


//STATIC FILES
app.use(express.static('public'))
app.use(express.static(__dirname +"public/css"));
app.use(express.static(__dirname +"public/js"));
app.use(express.static(__dirname +"public/img"));



//configuração responsável por direcionar consulta a pasta view ao tipo de arquivo ejs TEMPLATE ENGINE 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')





//NAVIGATION
app.get('/', (req, res) => res.render('index'))
app.use('/pessoas', pessoas)




//LISTEN PORT
model.sync().then(() => {
    app.listen(port, () => console.log('CRUD-ORM Listening...'))
})
