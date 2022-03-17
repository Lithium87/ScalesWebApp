'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentTime = new Date (new Date ().toUTCString ()).toISOString ();
    await queryInterface.bulkInsert ('Scales', [
      {
        scaleAddress: 1,
        scaleNumber: 1,
        scaleName: 'Везна № 1',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 2,
        scaleNumber: 2,
        scaleName: 'Везна № 2',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 3,
        scaleNumber: 3,
        scaleName: 'Везна № 3',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 4,
        scaleNumber: 4,
        scaleName: 'Везна № 4',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 5,
        scaleNumber: 5,
        scaleName: 'Везна № 5',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 6,
        scaleNumber: 6,
        scaleName: 'Везна № 6',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 7,
        scaleNumber: 7,
        scaleName: 'Везна № 7',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 8,
        scaleNumber: 8,
        scaleName: 'Везна № 8',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 9,
        scaleNumber: 9,
        scaleName: 'Везна № 9',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 10,
        scaleNumber: 10,
        scaleName: 'Везна № 10',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 11,
        scaleNumber: 11,
        scaleName: 'Везна № 11',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 12,
        scaleNumber: 12,
        scaleName: 'Везна № 12',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 13,
        scaleNumber: 13,
        scaleName: 'Везна № 13',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 14,
        scaleNumber: 14,
        scaleName: 'Везна № 14',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete ('Scales', null, {});
  },
};
