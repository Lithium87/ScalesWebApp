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
      materialId: {
        type: Sequelize.INTEGER,
      },
      scaleId: {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint ('Measurements', {
      fields: ['materialId'],
      type: 'foreign key',
      name: 'measurement_material_fk',
      references: {
        table: 'Materials',
        field: 'id',
      },
    });

    await queryInterface.addConstraint ('Measurements', {
      fields: ['scaleId'],
      type: 'foreign key',
      name: 'measurement_scale_fk',
      references: {
        table: 'Scales',
        field: 'id',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable ('Measurements');
    await queryInterface.removeConstraint (
      'Measurements',
      'measurement_material_fk'
    );
    await queryInterface.removeConstraint (
      'Measurements',
      'measurement_scale_fk'
    );
  },
};
