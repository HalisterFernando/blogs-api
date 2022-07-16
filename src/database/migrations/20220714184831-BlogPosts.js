'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('BlogPosts', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING
    },
    content: {
        allowNull: false,
        type: Sequelize.STRING
    },
    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    published: {
        type: 'TIMESTAMP',       
        allowNull: false        
    },
    updated: {
        type: 'TIMESTAMP',       
        allowNull: false,        
    }
   },)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
