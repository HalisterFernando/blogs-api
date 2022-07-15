'use strict';

module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
     postId: {
        type: DataTypes.INTEGER,
        foreignKey: true
     },
     categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
     }           
               
    },
    {                
        tableName: 'PostCategories'
    });
    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            foreignKey: 'postId', as: 'Category', through: PostCategory
        });
        models.Category.belongsToMany(models.BlogPost, {
            foreignKey: 'categoryId', as: 'BlogPost', through: PostCategory
        });
       
    }
    return PostCategory;
};