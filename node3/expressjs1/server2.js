//Routing in Express JS
const express = require('./node_modules/express')
const app = express()
const PORT = 9090

// route request to login module
var login = require('./routing/login/login')
app.use('/login', login)

// route request to logout module
var logout = require('./routing/logout/logout')
app.use('/logout', logout)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
