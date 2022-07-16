'use strict';

const { TIMESTAMP } = require("mysql2/lib/constants/types");

module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: { 
            type: DataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true, 
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: { 
            type: DataTypes.INTEGER, 
            foreignKey: true 
        },
        published: {
            type: "TIMESTAMP",   
        },                    
        updated: {
            type: "TIMESTAMP",    
        },   
  
    },
    {   createdAt: 'published',
        updatedAt: 'updated',
        tableName: 'BlogPosts'
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId', as: 'User'
        });
       
    }
    return BlogPost;
};