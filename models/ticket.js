// models/ticket.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      // Ticket belongs to Event
      this.belongsTo(models.Event, {
        foreignKey: 'event_id',
        as: 'event',
      });

      // Ticket belongs to User
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user',
      });
    }
  }

  Ticket.init(
    {
      event_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      seat_number: DataTypes.STRING,
      status: {
        type: DataTypes.ENUM,
        values: ['booked', 'cancelled'],
        defaultValue: 'booked',
      },
    },
    {
      sequelize,
      modelName: 'Ticket',
    }
  );

  return Ticket;
};
