module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
      person_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      comment_data: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      location: DataTypes.STRING,
      user_LAT: DataTypes.FLOAT,
      user_LNG: DataTypes.FLOAT,
      EventId: DataTypes.INTEGER
    },
    {
      timestamps: true
    }
  );

  Comment.associate = function(models) {
    // We're saying that a Comment should belong to an Event
    // A Comment can't be created without an Event due to the foreign key constraint
    Comment.belongsTo(models.Event, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Comment;
};
