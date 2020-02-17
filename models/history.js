'use strict';
module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
    urlID: DataTypes.INTEGER,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    chat: DataTypes.TEXT
  }, {});
  History.associate = function(models) {
    // associations can be defined here
  };
  return History;
};