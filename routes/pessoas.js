const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoas')
const model = require('../models/index')


//O ROUTER FAZ A INTERAÇÃO ENTRE PCONTROLLERS E MODELS E EXPORTA PRA MAIN INDEX.JS
router.get('/', pessoasController.index.bind(null, model.models))
// router.get('/create', pessoasController.createProcess.bind(null, model.models))
// router.get('/', pessoasController.createForm )


module.exports = router