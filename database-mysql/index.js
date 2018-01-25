var Sequelize = require('sequelize');

module.exports = new Sequelize({
  database: 'hackmo',
  username: 'root',
  password: null,
  host: 'localhost',
  dialect: 'mysql'
});

