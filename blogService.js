module.exports = blogService();

function blogService() {
    return {
        getArticle: getArticle,
        getAllArticles: getAllArticles,
        saveArticle: saveArticle,
        updateArticle: updateArticle,
        deleteArticle: deleteArticle        
    };

    function getArticle(id) {
        console.log('get blog article with id: ' + id);
        return {
            id: id,
            title: 'Article with id: ' + id,
            text: 'Some default text',
            author: 'John Doe',
        }
    }

    function getAllArticles() {
        return ['article_1', 'article_2', 'article_3'];
    }

    function saveArticle(article) {
        var id = 55;
        console.log('save article with id: ' + id);
        return id;
    }

    function updateArticle(article) {
        console.log('Article was updated. Id: ' + article.id);
    }

    function deleteArticle(id) {
        console.log('Article was deleted. Id: ' + id);
    }
}