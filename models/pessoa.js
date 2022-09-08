
    const { Sequelize } = require("sequelize");
    //MODEL DE CRIAÇÃO
    const PessoaModel = (sequelize) => {
        const Pessoa = sequelize.define('Pessoa', {
            nome: Sequelize.STRING,
            cargo: Sequelize.STRING,
            nascimento:Sequelize.DATE
        })

        //ASSOCIAR MODEL Pessoa AO MODEL Usuario   CRIAR REFERÊNCIA 
        Pessoa.associate = (models) => {
            Pessoa.hasOne(models.Usuario)
        }
        //OU usar destructure assignment
        // Pessoa.associate = ({Usuario}) => {
        //     Pessoa.hasOne(Usuario)
        // }

        return Pessoa
    }

module.exports = PessoaModel