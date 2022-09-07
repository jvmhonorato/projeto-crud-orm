
const fs = require('fs')
const path = require('path')

const { Sequelize } = require('sequelize')

//CONEXÃO COM O BANCO DE DADOS
const sequelize = new Sequelize('cadastro-orm', 'root','',{
    dialect: 'mysql',
    host: '127.0.0.1'
})


//IMPORT DOS MODELS MESCLANDO COM SEQUELIZE DB
// const pessoa =  require(`${__dirname}/pessoa`)(sequelize)

const models= {}
fs
.readdirSync(__dirname)
.filter((file)=> file!=='index.js')
.forEach((file)=> {
    const model = require(path.join(`${__dirname,file}`))(sequelize)

    models[model.name] = model
    console.log(model.name)
})



module.exports = {
    sequelize,
    models
}
   

// 
// 
// 



// module.exports ={
//     sequelize,
//     models
// }


//sequelize.sync().then(() => console.log('synced'))
// sequelize.authenticate().then(()=> console.log('auth'))