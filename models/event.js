module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define(
    "Event",
    {
      event_name: DataTypes.STRING,
      location_name: DataTypes.STRING,
      descrption: DataTypes.STRING,
      event_LAT: DataTypes.FLOAT,
      event_LNG: DataTypes.FLOAT,
    },
    {
      timestamps: true
    }
  );


  return Event;
};
