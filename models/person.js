module.exports = function(sequelize, DataTypes) {
  var person_table = sequelize.define("person_table", {
    is_user: DataTypes.STRING,
    person_name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  // Syncs with DB

  person_table.sync();

  return person_table;
};
