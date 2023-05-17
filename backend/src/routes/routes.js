const { Router } = require('express')
const router = Router()

router.use('/v1/auth', require('./auth/routes'))

module.exports = router