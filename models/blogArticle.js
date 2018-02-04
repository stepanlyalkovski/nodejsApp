var mongoose = require('mongoose');

var blogArticleSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    tags: Array,
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('blogArticle', blogArticleSchema);