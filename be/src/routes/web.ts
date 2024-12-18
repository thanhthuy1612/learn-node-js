const express = require('express')
const { getHomePage, getHomePageEjs } = require('~/controllers/home.controller')

const router = express.Router()

router.get('/', getHomePage)

router.get('/ejs', getHomePageEjs)

module.exports = router
