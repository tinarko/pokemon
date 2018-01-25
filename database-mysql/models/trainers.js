const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('trainers', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);
