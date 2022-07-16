require('dotenv').config();
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const { Category } = require('../database/models');

const { JWT_SECRET } = process.env;

module.exports = {
    login: (req, _res, next) => {
        const { email, password } = req.body;    
    
        if (!email || password === undefined) {
            const err = new Error('Some required fields are missing');
            err.name = 'MissingFields';
            throw err;            
        }   
    
        return next();
    },
    token: (req, _res, next) => {
        const { authorization: token } = req.headers;
    
        if (!token) {
            const err = new Error('Token not found');
            err.name = 'TokenNotFound';
            throw err;
        }        
        jwt.verify(token, JWT_SECRET);
        
        return next();
    },
    newUser: (req, _res, next) => {
        const { displayName, email, password } = req.body;
    
        const { error } = Joi.object({
            displayName: Joi.string().min(8),
            email: Joi.string().email(),
            password: Joi.string().min(6),
        }).validate({ displayName, email, password });
    
        if (error) {
            const err = new Error(error.message);
            err.name = 'InvalidNewUser';
            throw err;
        }
    
        return next();
    },
    newCategory: (req, _res, next) => {
        const { name } = req.body;
       
        const { error } = Joi.object({
            name: Joi.string().required(),
        }).validate({ name });
    
        if (error) {
            const err = new Error(error.message);
            err.name = 'InvalidNewCategory';
            throw err;
        }
    
        return next();
    },
    newPost: async (req, res, next) => {
        const { title, content, categoryIds } = req.body;

        const { error } = Joi.object({
            title: Joi.string().required(),
            content: Joi.string().required(),
            categoryIds: Joi.array().min(1),
        }).validate({ title, content, categoryIds });

        if (error) {
            const err = new Error('Some required fields are missing');
            err.name = 'MissingFields';
            throw err;
        }

        const existingIds = await Promise.all(categoryIds.map((id) => Category.findByPk(id)));

        if (existingIds.every((el) => !el)) {
            const err = new Error('"categoryIds" not found');
            err.name = 'IdsNotFound';
            throw err;
        }
        
       return next();
    },

};