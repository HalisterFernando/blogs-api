'use strict';

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
        createdAt: {
          type: sequelize.literal('CURRENT_TIMESTAMP'),
          field: 'published'
        },        
        updatedAt: {
          type: sequelize.literal('CURRENT_TIMESTAMP'),
          field: 'updated'
        },           
               
    },
    {           
        tableName: 'BlogPosts'
    });
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'userId', as: 'User'
        });
       
    }
    return BlogPost;
};