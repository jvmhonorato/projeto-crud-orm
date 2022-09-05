const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoas')



router.get('/', pessoasController.index)


module.exports = router