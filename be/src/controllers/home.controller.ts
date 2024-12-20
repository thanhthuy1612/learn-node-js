import { Request, Response } from 'express'

const { getAllUser, createUser, findUserById, updateUser, deleteUser } = require('~/services/CRUD.service')

const getHomePage = async (_req: Request, res: Response) => {
  const result = await getAllUser()
  res.render('homepage.ejs', { users: result })
}
const getCreateHomePage = (_req: Request, res: Response) => {
  res.render('createpage.ejs')
}

const getUpdateHomePage = async (req: Request, res: Response) => {
  const user = await findUserById(req.params.id)
  res.render('updatepage.ejs', { user })
}

const getHomePageEjs = (_req: Request, res: Response) => {
  res.render('sample.ejs')
}

const postCreateUser = async (req: Request, res: Response) => {
  const { email, name, city } = req.body
  const result = await createUser(email, name, city)
  res.send(JSON.stringify(result))
}

const postUpdateUser = async (req: Request, res: Response) => {
  const { email, name, city } = req.body
  const result = await updateUser(req.params.id, email, name, city)
  res.send(JSON.stringify(result))
}

const postDeleteUser = async (req: Request, res: Response) => {
  const result = await deleteUser(req.params.id)
  res.send(JSON.stringify(result))
  // res.redirect('/')
}

const getUser = async (_req: Request, res: Response) => {
  const result = await getAllUser()
  res.send(JSON.stringify(result))
}

module.exports = {
  getHomePage,
  getHomePageEjs,
  postCreateUser,
  getUser,
  getCreateHomePage,
  getUpdateHomePage,
  postUpdateUser,
  postDeleteUser
}
