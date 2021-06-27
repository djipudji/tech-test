const mongoose = require('mongoose');

// DATABASE HOST
const uri = "mongodb+srv://test:article@article.ikp3x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 


// CONNECTING TO DATABASE
mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

// IMPORTING MODELS ARTICLE.JS
const article = require('./article.js');

// IMPORTING MODELS COMMENT.JS
const comment = require('./comment.js')


module.exports = { article, comment };