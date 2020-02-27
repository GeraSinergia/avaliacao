const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User')
const Article = require('../models/Article')
const connection = new Sequelize (dbConfig);

User.init(connection);
Article.init(connection);
Article.associate(connection.models)
User.associate(connection.models)

module.exports= connection;