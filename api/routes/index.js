const router = require('express').Router()

router.use('/uploads', require('./uploads'))
router.use('/auth', require('./auth'))
router.use('/users', require('./users'))
router.use('/comments', require('./comments'))
router.use('/species', require('./species'))

export default router
