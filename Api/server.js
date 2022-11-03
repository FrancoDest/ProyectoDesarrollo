const express = require('express')
const app = express()
const port = 3000

var Usuarios = [];
app.get('/', (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
