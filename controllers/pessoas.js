
// const model = require('../models/index')
// const path = require('path');
// const Sequelize = require('sequelize');

// const sequelize = require('./../models/index');
// const Pessoa = require('./../models/pessoa')
// const Pessoa = require(path.join(__dirname, './../models/pessoa'))(sequelize, Sequelize.DataTypes)


//USAR DEPENDENCIES QUE EQUIVALE AO OBJETO MODELS.PESSOA QUE VEM DE  MODELS/INDEX OU USAR DESTRUCT ASSIGNMENT {PESSOA}
const index = async({Pessoa}, req, res) => {
    const pessoas = await Pessoa.findAll()
    res.send(pessoas)
}

//RENDERIZA FORMULÁRIO
const createForm = (req,res)=> {
    res.render('pessoas/create')
}

//CRIA DADOS NO FORMULÁRIO
const createProcess = async({Pessoa}, req, res) => {
    res.send('create')
}

module.exports = {
    index,
    createForm,
    createProcess
   
}