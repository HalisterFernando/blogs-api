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
        published: sequelize.literal('CURRENT_TIMESTAMP'),        
        updated: sequelize.literal('CURRENT_TIMESTAMP'),           
               
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