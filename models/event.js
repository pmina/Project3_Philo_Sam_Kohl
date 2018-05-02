module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      event_name: DataTypes.STRING,
      descrption: DataTypes.STRING,
      location_name: DataTypes.STRING,
      event_LAT: DataTypes.STRING,
      event_LNG: DataTypes.STRING,
      createdAt: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );


  return Event;
};
