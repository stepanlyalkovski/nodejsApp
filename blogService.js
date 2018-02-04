var mongoose = require('mongoose');
var BlogArticle = require('./models/blogArticle');

function blogService() {
    return {
        getArticle: getArticle,
        getAllArticles: getAllArticles,
        saveArticle: saveArticle,
        updateArticle: updateArticle,
        deleteArticle: deleteArticle        
    };

    function getArticle(id, callback) {
        BlogArticle.findOne({ _id: id }, {'__v': 0}, callback);
    }

    function getAllArticles(callback) {
        BlogArticle.find({}, { '__v': 0 }, callback);
    }

    function saveArticle(article, callback) {
        BlogArticle.create(article, callback);
    }

    function updateArticle(article, callback) {
        BlogArticle.update({ _id: article._id }, article, { w: 1 }, callback);
    }

    function deleteArticle(id, callback) {
        Tank.remove({ _id: id }, callback);
    }
}

module.exports = blogService();