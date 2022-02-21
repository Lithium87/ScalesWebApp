const {Sequelize} = require ('sequelize');

const sequelize = new Sequelize ('web-scales', null, null, {
  dialect: 'sqlite',
  storage: './server/WebScales.sqlite',
});

module.exports = sequelize;
