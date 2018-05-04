module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      event_name: DataTypes.STRING,
      location_name: DataTypes.STRING,
      descrption: DataTypes.STRING(1000),
      event_LAT: DataTypes.FLOAT,
      event_LNG: DataTypes.FLOAT,
    },
    {
      timestamps: true
    }
  );

  Event.associate = function(models) {
    // Associating Event with Posts
    // When an Event is deleted, also delete any associated Posts
    Event.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };


  return Event;
};
