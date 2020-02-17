'use strict';
module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define('Url', {
    name: DataTypes.STRING,
    url: DataTypes.TEXT
  }, {});
  Url.associate = function(models) {
    // associations can be defined here
  };
  return Url;
};