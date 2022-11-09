const express = require('express')
const path = require('path')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const app = express()
const port = 3001

app.use(express.static(path.join(__dirname, './public')))

//http logger
// app.use(morgan('combined'))

//teaplate engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, './resoures/views'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news')
})

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res) => {
  console.log(req.body)
  res.send('')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})