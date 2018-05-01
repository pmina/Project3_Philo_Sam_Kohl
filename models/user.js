module.exports = function(sequelize, DataTypes) {
    var comment_table = sequelize.define(
        "comment_table", {
        person_name: DataTypes.STRING, 
        comment_data: DataTypes.STRING,
        location: DataTypes.STRING,
        user_LAT: DataTypes.STRING,
        user_LNG: DataTypes.STRING ,                    
    },
    {
        timestamps: true
      }
);

    var person_table = sequelize.define(
        "person_table", {
        is_user: DataTypes.STRING,
        person_name: DataTypes.STRING, 
        password: DataTypes.STRING,
        email: DataTypes.STRING,                  
    },

);

    var event_table = sequelize.define(
        "event_table", {
        event_name: DataTypes.STRING, 
        descrption: DataTypes.STRING,
        location_name: DataTypes.STRING,
        event_LAT: DataTypes.STRING,
        event_LNG: DataTypes.STRING ,                    
        createdAt: DataTypes.STRING,
    },
    {
        timestamps: true
    }

    // Syncs with DB
  Profile.sync();


    return User;
}