'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.INTEGER,
        image: DataTypes.STRING,
    },
    {
        timestamps: false,        
        tableName: 'Users'
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
            foreignKey: 'id' , as: 'BlogPost' 
        });
    }

    return User;
};