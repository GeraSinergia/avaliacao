const express = require('express');
const UserController = require ('./Controllers/UserController');
const ArticleController = require ('./Controllers/ArticleController');
const AuthController = require ('./Controllers/AuthController');

const routes = express.Router();

routes.get('/users', UserController.index);

routes.post('/users/:author_id/articles',ArticleController.store);
routes.get('/articles',ArticleController.index);

routes.get('/auth',AuthController.index);
routes.post('/signup',AuthController.signup);
routes.post('/login',AuthController.login)


module.exports=routes;