const AuthenticationCtrl = require('./controllers/AuthenticationCtrl')
module.exports = (app) => {
  app.post('/register', AuthenticationCtrl.register)
}
