const {User} = require('../models')

module.exports = {
  register (req, res) {
    try {
      User.create(req.body).then((user) => {
        console.log('registering user', user)
        res.send(user.toJSON())
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  }
}
