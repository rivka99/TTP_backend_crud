module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Students',
    [
      {
        firstName: 'Candy',
        lastName: 'Man',
        email: 'jonjonjon@gmail.com',
        imageURL: 'https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_960_720.png',
        createdAt: new Date(),
        updatedAt: new Date(),
        gpa:8
      }
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Campuses', null, {}),
};
