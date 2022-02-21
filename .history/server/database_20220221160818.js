const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize ('web-scales', {
  dialect: 'sqlite',
  storage: './WebScales.sqlite',
});

module.exports = sequelize;
