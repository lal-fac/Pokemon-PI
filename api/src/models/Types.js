const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
    sequelize.define('types', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true
    }
  },
  {
    timestamps: false
  }
  );
};