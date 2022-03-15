'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable ('Measurements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      materialName: {
        type: Sequelize.STRING,
        validate: {
          max: 255,
        },
      },
      operatorName: {
        type: Sequelize.STRING,
        validate: {
          max: 255,
        },
      },
      weight: Sequelize.FLOAT,
      density: Sequelize.FLOAT,
      mixer: Sequelize.INTEGER,
      byrkalo: Sequelize.INTEGER,
      penetration: Sequelize.INTEGER,
      nominal: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 100.00,
      },
      deviation: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      tact: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      tactDeviation: {
        type: Sequelize.REAL,
        allowNull: false,
        defaultValue: 0,
      },
      materialId: {
        type: Sequelize.INTEGER,
        references: {
          table: 'Materials',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      scaleId: {
        type: Sequelize.INTEGER,
        references: {
          table: 'Scales',
          key: 'id',
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Measurements');
  },
};
