const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize ('web-scales', {
  dialect: 'sqlite',
  host: './WebScales.sqlite',
});

module.exports = sequelize;
