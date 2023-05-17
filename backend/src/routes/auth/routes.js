const { Router } = require('express')
const router = Router()

const authController = require('../../controllers/auth/auth.controller')

router.post('/login', authController.login)
router.post('/signup', authController.createUser)

module.exports = router