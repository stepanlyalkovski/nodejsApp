let mongoose = require('mongoose');
let BlogArticle = require('./models/blogArticle');

function blogService() {
    return {
        getArticle: getArticle,
        getAllArticles: getAllArticles,
        saveArticle: saveArticle,
        updateArticle: updateArticle,
        deleteArticle: deleteArticle        
    };

    function getArticle(id) {
        return BlogArticle.findOne({ _id: id }, {'__v': 0});
    }

    function getAllArticles() {
        return BlogArticle.find({}, { '__v': 0 });
    }

    function saveArticle(article) {
        return BlogArticle.create(article);
    }

    function updateArticle(article) {
        return BlogArticle.update({ _id: article._id }, article);
    }

    function deleteArticle(id) {
        return BlogArticle.remove({ _id: id });
    }
}

module.exports = blogService();