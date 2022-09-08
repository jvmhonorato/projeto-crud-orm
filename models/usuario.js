
    const { Sequelize } = require("sequelize");
    //MODEL DE CRIAÇÃO
    const UsuarioModel = (sequelize) => {
        const Usuario = sequelize.define('Usuario', {
            usename: Sequelize.STRING,
            senha: Sequelize.STRING
            
        })
        return Usuario
    }

module.exports = UsuarioModel