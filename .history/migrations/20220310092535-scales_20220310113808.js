'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Scales', {
      scaleId: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      scaleAddress: {
        type: Sequelize.DataTypes.SMALLINT,
        allowNull: false,
      },
      scaleNo: {
        type: Sequelize.DataTypes.SMALLINT,
        allowNull: false,
      },
      scaleName: {
        type: Sequelize.DataTypes.TEXT,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.deleteTable ('Scales');
  },
};
