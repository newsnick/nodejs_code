//Reading requested path parameters using express
const express = require('./node_modules/express')
const app = express()
const PORT = 9090
//localhost:8080/login/xyz@gmail.com/12345
app.get('/login/:uname/:pword', (req, res) => {
  var uname = req.params.uname
  var pword = req.params.pword
  res.send(`requested url username : ${uname} , password : ${pword}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

// path parameters
// localhost:8080/emanage/name/heeren/email/singh@gmail.com

// query parameters
// localhost:8080/emanage?name=heeren&email=singh@gmail.com
