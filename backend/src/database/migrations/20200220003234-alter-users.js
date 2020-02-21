'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn(
      'users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    ),
    queryInterface.changeColumn(
      'users',
      'email',
      {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      }
    )
    

  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
