module.exports = function(sequelize, DataTypes) {
  var event_table = sequelize.define(
    "event_table",
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

  // Syncs with DB

  event_table.sync();

  return event_table;
};
