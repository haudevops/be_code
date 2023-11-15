const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const app = express()
const port = 8080

app.use(morgan('combined'))

//Template Handlebar
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/home', (req, res) => {
  // res.send('Hello World!')
  res.render('home')
})

app.listen(port, () => {
  console.log(`Local connect ${port} success`)
})