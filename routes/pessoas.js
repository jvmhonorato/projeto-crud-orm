const express = require('express')
const router = express.Router()
const pessoasController = require('../controllers/pessoas')
const model = require('../models/index')


//O ROUTER FAZ A INTERAÇÃO ENTRE PCONTROLLERS E MODELS E EXPORTA PRA MAIN INDEX.JS
router.get('/', pessoasController.index.bind(null, model.models));
router.post('/create', pessoasController.createProcess.bind(null, model.models));
router.get('/create', pessoasController.createForm );
router.get('/delete/:id',pessoasController.remove.bind(null, model.models) );
router.post('/edit/:id', pessoasController.editProcess.bind(null, model.models));
router.get('/edit/:id', pessoasController.editForm.bind(null,model.models) );

module.exports = router