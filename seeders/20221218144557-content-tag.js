'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tag', [
      {
        id: 1,
        name: 'tag1',
      },
      {
        id: 2,
        name: 'tag2',
      },
    ]);
    await queryInterface.bulkInsert('content_tag', [
      {
        contentId: 100,
        tagId: 1,
      },
      {
        contentId: 101,
        tagId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('content_tag', null, {});
    await queryInterface.bulkDelete('tag', null, {});
  }
};
