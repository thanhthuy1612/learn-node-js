import { Request, Response } from 'express'

const getHomePage = (_req: Request, res: Response) => {
  res.send('Hello World!')
}

const getHomePageEjs = (_req: Request, res: Response) => {
  res.render('sample.ejs')
}

module.exports = {
  getHomePage,
  getHomePageEjs
}
