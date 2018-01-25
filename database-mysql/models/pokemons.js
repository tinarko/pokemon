const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('pokemons', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    trainer: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
