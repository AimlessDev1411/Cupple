const { Router } = require('express')
const HandleAuth = require('../../helpers/HandleAuth')
const userController = require('../../controllers/users/users.controller')

const handleAuth = new HandleAuth()
const router = Router()

router.get('/me', handleAuth.verifyToken, userController.getMe)

module.exports = router