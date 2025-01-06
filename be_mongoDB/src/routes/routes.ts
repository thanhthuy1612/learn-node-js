const userRouter = require('~/routes/user')
const uploadRouter = require('~/routes/upload')

const setRoutes = (app: any) => {
  app.use('/v1/api/user', userRouter)
  app.use('/v1/api/upload', uploadRouter)
}

module.exports = setRoutes
