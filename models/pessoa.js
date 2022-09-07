
    const { Sequelize } = require("sequelize");
    //MODEL DE CRIAÇÃO
    const PessoaModel = (sequelize) => {
        const Pessoa = sequelize.define('Pessoa', {
            nome: Sequelize.STRING,
            cargo: Sequelize.STRING
        })
        return Pessoa
    }

module.exports = PessoaModel