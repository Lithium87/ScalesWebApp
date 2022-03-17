'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const currentTime = new Date (new Date ().toUTCString ()).toISOString ();
    await queryInterface.bulkInsert ('Scales', [
      {
        scaleAddress: 1,
        scaleNo: 1,
        scaleName: 'Везна № 1',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 2,
        scaleNo: 2,
        scaleName: 'Везна № 2',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 3,
        scaleNo: 3,
        scaleName: 'Везна № 3',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 4,
        scaleNo: 4,
        scaleName: 'Везна № 4',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 5,
        scaleNo: 5,
        scaleName: 'Везна № 5',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 6,
        scaleNo: 6,
        scaleName: 'Везна № 6',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 7,
        scaleNo: 7,
        scaleName: 'Везна № 7',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 8,
        scaleNo: 8,
        scaleName: 'Везна № 8',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 9,
        scaleNo: 9,
        scaleName: 'Везна № 9',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 10,
        scaleNo: 10,
        scaleName: 'Везна № 10',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 11,
        scaleNo: 11,
        scaleName: 'Везна № 11',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 12,
        scaleNo: 12,
        scaleName: 'Везна № 12',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 13,
        scaleNo: 13,
        scaleName: 'Везна № 13',
        createdAt: currentTime,
        updatedAt: currentTime,
      },
      {
        scaleAddress: 14,
        scaleNo: 14,
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
