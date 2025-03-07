module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Events', 'venue_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Venues', // Name of the Venue table
        key: 'id'
      },
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Events', 'venue_id');
  }
};
