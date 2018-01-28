var express = require('express');
var blogRouter = express.Router();
var blogService = require('./blogService.js');

blogRouter.get('/', function(req, res, next) {
    var articles = blogService.getAllArticles();
    res.json(articles);
});

blogRouter.get('/:id', function(req, res, next) {
    var article = blogService.getArticle(req.params.id);
    res.json(article);
});

blogRouter.post('/', function(req, res, next) {
    var createdId = blogService.saveArticle(req.body.article);
    res.sendStatus(201);
});

blogRouter.put('/', function(req, res, next) {
    blogService.updateArticle(req.body.article);
    res.sendStatus(200);
});

blogRouter.delete('/:id', function(req, res, next) {
    blogService.deleteArticle(req.params.id);
    res.sendStatus(200);
});


module.exports = blogRouter;