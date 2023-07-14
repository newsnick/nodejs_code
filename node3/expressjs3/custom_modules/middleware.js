// Node.js module that exports a middleware function that performs a simple authentication
module.exports = (obj) => {
  return (req, res, next) => {
    var username = obj.uname
    var password = obj.pword
    if (username == 'admin' && password == 'admin@123') {
      next()
    } else {
      res.send('authentication failed.')
    }
  }
}
