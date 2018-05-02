module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define(
    "Comment",
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


  return Comment;
};
