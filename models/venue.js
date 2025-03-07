// models/venue.js
module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define('Venue', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    Venue.associate = function (models) {
      // Link Venue to Event (1 to Many relationship)
      Venue.hasMany(models.Event, {
        foreignKey: 'venue_id',
        as: 'events' // Alias for the associated events
      });
    };
  
    return Venue;
  };
  