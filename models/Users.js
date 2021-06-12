module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Users', {
        userid: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        username: DataTypes.STRING,
        usertag: DataTypes.INTEGER,
        minutes: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          allowNull: false,
        },
      });
}