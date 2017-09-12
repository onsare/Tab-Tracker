// initialize dependencies by requiring them
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

// create instance of express application
const app = express()

app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

app.get('/', (req, res) => {
  res.json({'message': 'welcome to the api'})
})

app.post('/register', (req, res) => {
  res.json({message: `hello ${req.body.email} you have successfully registered`})
})

app.listen(3000, () => console.log('App listening on port http://localhost:3000'))
