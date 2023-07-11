//Reading post parameters using express
const express = require('./node_modules/express')
const bodyParser = require('./node_modules/body-parser')
const app = express()
const PORT = 9090

//set json MIME Type - (define reqest headers)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/login', (req, res) => {
  var uname = req.body.uname
  var pword = req.body.pword
  res.send(`requeste body attributes username : ${uname} , password : ${pword}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

//Body parser use to read post parameters
// request url - http://localhost:9090/login

/*
request body-
          {
            "uname": "admin",
            "pword": "pwrd123"
          }
*/
