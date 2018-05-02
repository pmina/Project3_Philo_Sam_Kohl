module.exports = function(sequelize, DataTypes) {
  var Person = sequelize.define(
    "Person",
    {
    is_user: DataTypes.STRING,
    person_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });


  return Person;
};
