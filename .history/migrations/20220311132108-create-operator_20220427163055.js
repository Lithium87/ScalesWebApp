'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Operators', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      zvenoId: {
        type: Sequelize.INTEGER,
      },
      operatorName: {
        type: Sequelize.STRING,
        validate: {
          max: 255,
        },
      },
      operatorCardNumber: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Operators');
  },
};
