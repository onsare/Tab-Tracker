// initialize dependencies by requiring them
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config/config')
const {sequelize} = require('./models')

// create instance of express application
const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

require('./routes')(app)

sequelize.sync({force: true})
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on http://localhost/${config.port}`)
  })
