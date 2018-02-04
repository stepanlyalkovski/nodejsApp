var express = require('express');
var blogRouter = express.Router();
var blogService = require('./blogService.js');

blogRouter.get('/', function(req, res, next) {
    blogService.getAllArticles(function(err, articles) {
        res.json(articles);
    });
});

blogRouter.get('/:id', function(req, res, next) {
    blogService.getArticle(req.params.id, function(err, article) {
        res.json(article);        
    });
});

blogRouter.post('/', function(req, res, next) {
    blogService.saveArticle(req.body.article, function(err, article) {
        res.sendStatus(201);        
    });
});

blogRouter.put('/:id', function(req, res, next) {
    var article = req.body;
    article._id = req.params.id;
    blogService.updateArticle(article, function(err) {
        res.sendStatus(200);        
    });
});

blogRouter.delete('/:id', function(req, res, next) {
    blogService.deleteArticle(req.params.id, function(err) {
        res.sendStatus(200);
    });
});


module.exports = blogRouter;