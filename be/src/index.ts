require('dotenv').config()

const express = require('express')
const configViewEngine = require('~/config/viewEngine')
const webRoutes = require('~/routes/web')

const app = express()

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//env
const port = process.env.PORT
const hostname = process.env.HOST_NAME

// //config
configViewEngine(app)

// //router
app.use('/', webRoutes)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
