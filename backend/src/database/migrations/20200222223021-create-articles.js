'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('articles', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      author_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{model:'users',key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE'

      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });


  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('articles');
  }
};
