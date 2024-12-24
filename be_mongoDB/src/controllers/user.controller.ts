import { Request, Response } from 'express'

const { getAllUsers, createUser, findUserById, deleteUser, updateUser } = require('~/services/user.service')

const userController = {
  getAll: async (_req: Request, res: Response) => {
    try {
      const users = await getAllUsers()
      res.status(200).json(users)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  add: async (req: Request, res: Response) => {
    try {
      const { email, name, city } = req.body
      const result = await createUser(email, name, city)
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  getById: async (req: Request, res: Response) => {
    try {
      const result = await findUserById(req.params.id)
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  update: async (req: Request, res: Response) => {
    try {
      const { email, name, city } = req.body
      const result = await updateUser(req.params.id, email, name, city)
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  },
  delete: async (req: Request, res: Response) => {
    try {
      const result = await deleteUser(req.params.id)
      res.status(200).json(result)
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

module.exports = userController
