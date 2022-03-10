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
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      operatorName: {
        type: DataTypes.STRING,
        validate: {
          max: 100,
        },
      },
      operatorCartNo: {
        type: DataTypes.INTEGER,
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
