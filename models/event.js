// models/event.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define the association between Event and Venue (Many-to-One)
      Event.belongsTo(models.Venue, {
        foreignKey: 'venue_id', // foreign key in Event model
        as: 'venue', // Alias for the Venue data
      });

      // Define the association between Event and Ticket (One-to-Many)
      Event.hasMany(models.Ticket, {
        foreignKey: 'event_id',
        as: 'tickets', // Alias for the Tickets
      });
    }
  }

  Event.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.TEXT,
      date: DataTypes.DATE,
      time: DataTypes.TIME,
      venue_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );

  return Event;
};
