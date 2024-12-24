require('dotenv').config()

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const configViewEngine = require('~/config/viewEngine')
const connection = require('~/config/database')
const userRouter = require('~/routes/user')

const app = express()

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(bodyParser.json({ limit: '50mb' }))
app.use(cors())
app.use(morgan('common'))

//env
const port = process.env.PORT
const hostname = process.env.HOST_NAME

// //config
configViewEngine(app)

// //router
app.use('/v1/api/user', userRouter)

//self running function
;(async () => {
  try {
    // //connect
    await connection()
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`)
    })
  } catch (error) {
    console.error(error)
  }
})()
