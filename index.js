const express = require('express')
const app = express()
const port = 8080

app.get('/home', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Local connect ${port} success`)
})