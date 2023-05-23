const { Router } = require('express')
const router = Router()

router.use('/v1/auth', require('./auth/routes'))
router.use('/v1/users', require('./users/routes'))

module.exports = router