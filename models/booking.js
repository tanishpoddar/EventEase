module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define("Booking", {
      userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: "Users", key: "id" }
      },
      eventId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: { model: "Events", key: "id" }
      },
      tickets: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      status: {
          type: DataTypes.ENUM("confirmed", "pending", "canceled"),
          defaultValue: "pending"
      }
  });

  Booking.associate = (models) => {
      Booking.belongsTo(models.User, { foreignKey: "userId" });
      Booking.belongsTo(models.Event, { foreignKey: "eventId" });
  };

  return Booking;
};
