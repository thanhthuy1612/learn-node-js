import { Request, Response } from 'express'

const connection = require('~/config/database')

const getHomePage = (_req: Request, res: Response) => {
  connection.query('SELECT * FROM Users u', function (_err: any, result: any) {
    res.send(JSON.stringify(result))
  })
}

const getHomePageEjs = (_req: Request, res: Response) => {
  res.render('sample.ejs')
}

module.exports = {
  getHomePage,
  getHomePageEjs
}
