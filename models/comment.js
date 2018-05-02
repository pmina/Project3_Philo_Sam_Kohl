module.exports = function(sequelize, DataTypes) {
  var comment_table = sequelize.define(
    "comment_table",
    {
      person_name: DataTypes.STRING,
      comment_data: DataTypes.STRING,
      location: DataTypes.STRING,
      user_LAT: DataTypes.STRING,
      user_LNG: DataTypes.STRING
    },
    {
      timestamps: true
    }
  );

  // Syncs with DB
  comment_table.sync();

  return comment_table;
};
