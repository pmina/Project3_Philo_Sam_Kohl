module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define(
    "Comment",
    {
      person_name: DataTypes.STRING,
      comment_data: DataTypes.STRING,
      location: DataTypes.STRING,
      user_LAT: DataTypes.FLOAT,
      user_LNG: DataTypes.FLOAT,
      events_id: DataTypes.INT
    },
    {
      timestamps: true
    }
  );


  return Comment;
};
