const uploadController = require('~/controllers/upload.controller')

const router = require('express').Router()

router.post('/singular', uploadController.uploadSingular)
router.post('/multipleFile', uploadController.uploadMultiple)

module.exports = router
