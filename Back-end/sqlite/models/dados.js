const { Sequelize, DataTypes } = require("sequelize");

const sqlite = new Sequelize({
  dialect: "sqlite",
  storage: "../models/db.sqlite", 
});

const Dados = sqlite.define("Dados",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    cpf:{
      type: DataTypes.STRING,
    },
  
    relato:{
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true, // habilita os campos de data e hora de criação e atualização
  }
);

// CREATE TABLE IF NOT EXISTS
try {
  Dados.sync();
} catch (error) {
  console.error("Erro ao sincronizar tabela:", error);
}

module.exports = Dados;