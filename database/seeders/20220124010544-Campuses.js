module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Campuses',
    [
      {
        // campusId: 1,
        name: 'Adelphi',
        imgURL: 'https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png',
        address: '890898 8th Pary Lane',
        description: 'A good school!',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Campuses', null, {}),
};
