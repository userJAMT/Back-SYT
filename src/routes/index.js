const { Router } = require('express');
const Users = require('./users')
const Posts = require('./posts')
const Categories = require('./categories')
const Premium = require('./premium')
const router = Router();

router.use('/users', Users)
router.use('/posts', Posts)
router.use('/categories', Categories)
router.use('/premium', Premium)

module.exports = router;
////hola como estas