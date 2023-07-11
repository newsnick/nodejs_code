//Reading requested query parameters using express
const express = require('./node_modules/express')
const app = express()
const PORT = 9090
app.get('/login', (req, res) => {
  var uname = req.query.uname
  var pword = req.query.pword
  res.send(`requested url username : ${uname} , password : ${pword}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

// request url - http://localhost:9090/login?uname=heeren&pword=h1235
