'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Materials', {
      materialId: {
        type: Sequelize.DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
        primaryKey: true,
      },
      materialName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          max: 255,
        },
      },
      cardNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Materials');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
