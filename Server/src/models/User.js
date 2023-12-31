const { DataTypes } = require('sequelize');
// Modelo de Usuario Para el registro
module.exports = (sequelize) => {
    sequelize.define('User', {
        ID: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,   // cambiado       
        },
        lastName: {
          type: DataTypes.STRING,
          allowNull: true,     // cambiado          
        },
        phone: {
          type: DataTypes.INTEGER,
          allowNull: true, // cambiado      
        },
        address: {
          type: DataTypes.STRING,
          allowNull: true, // cambiado      
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          primaryKey: true, 
        },
        nickname: {
          type: DataTypes.STRING,
          allowNull: false, 
          unique: true,
        },
        picture: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      }, { freezeTableName: true
    });
};