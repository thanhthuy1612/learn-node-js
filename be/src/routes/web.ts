const express = require('express')
const {
  getHomePage,
  getHomePageEjs,
  postCreateUser,
  getUser,
  getCreateHomePage,
  getUpdateHomePage,
  postUpdateUser,
  postDeleteUser
} = require('~/controllers/home.controller')

const router = express.Router()

router.get('/', getHomePage)
router.get('/ejs', getHomePageEjs)
router.get('/get-user', getUser)
router.get('/create', getCreateHomePage)
router.get('/update/:id', getUpdateHomePage)

router.post('/create-user', postCreateUser)
router.post('/update-user/:id', postUpdateUser)
router.get('/delete-user/:id', postDeleteUser)

module.exports = router
