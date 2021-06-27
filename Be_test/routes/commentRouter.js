const express = require('express'),
    router = express.Router(),
    commentController = require('../controllers/commentController.js'),
    commentValidator = require('../validators/commentValidator.js');

// // IF ACCESSING localhost:3000/comment/ WE WILL GO TO GET ONE COMMENT ENDPOINT
router.get('/getOne/:comment_id', commentValidator.getOne, commentController.getOne);

// // IF ACCESSING localhost:3000/comment/get/campaign WE WILL GO TO GET ALL COMMENT SORT BY CAMPAIGN ENDPOINT
router.get('/getByArticle', commentValidator.getByArticle, commentController.getByArticle);

// IF ACCESSING localhost:3000/comment/create WE WILL GO TO CREATE COMMENT ENDPOINT
router.post('/create', commentValidator.create, commentController.create);

// // IF ACCESSING localhost:3000/comment/update/:comment_id WE WILL GO TO UPDATE COMMENT ENDPOINT
router.put('/update/:comment_id', commentValidator.update, commentController.update);

// // IF ACCESSING localhost:3000/comment/delete WE WILL GO TO UPDATE USER IN COMMENT ENDPOINT
router.delete('/delete/:comment_id', commentValidator.delete, commentController.delete)

module.exports = router;