'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('tag', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING
    });
    await queryInterface.createTable('content_tag', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      contentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contents',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tag',
          key: 'id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('content_tag', 'content_tag_ibfk_1');
    await queryInterface.removeConstraint('content_tag', 'content_tag_ibfk_2');

    await queryInterface.dropTable('tag');
    await queryInterface.dropTable('content_tag');
  }
};
