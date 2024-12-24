const userController = require('~/controllers/user.controller')

const router = require('express').Router()

router.post('/', userController.add)

router.get('/', userController.getAll)
router.get('/:id', userController.getById)

router.put('/:id', userController.update)

router.delete('/:id', userController.delete)

module.exports = router
