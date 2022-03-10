'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Operators', {
      operatorId: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      zvenoId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      operatorName: {
        type: Sequelize.DataTypes.STRING,
        validate: {
          max: 100,
        },
      },
      operatorCartNo: {
        type: Sequelize.DataTypes.INTEGER,
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
