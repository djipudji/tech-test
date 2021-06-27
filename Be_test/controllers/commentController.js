const { comment, article } = require('../models')
const { ObjectId } = require('mongodb')
class CommentController {

    async getOne(req, res) {
        try {
            let getOneComment = await comment.findOne({
                _id: req.params.comment_id
            }, '_id userName comment article');

            return res.status(200).json({
                status: `Success get one comment!`,
                data: getOneComment
            });
        } catch (e) {
            return res.status(500).json({
                status: `Error!`,
                errors: e
            });
        };
    };


    async getByArticle(req, res) {
        let articleObj = new ObjectId(req.query.article_id)
        try {
            const { page = 1, limit = 6 } = req.query;

            const countFindByArticle = await comment.find({
                "article._id": articleObj
            });

            const findByComment = await comment.find({
                "article._id": articleObj
                },'_id userName comment article')

            const count = await countFindByArticle.length;

            return res.status(200).json({
                status: `Success get comment by campaign!`,
                data : findByComment,
                totalPages: Math.ceil(count / limit),
                currentPage: page
            });
        } catch (e) {
            return res.status(500).json({
                status: `Error!`,
                errors: e
            });
        };
    };

    async create(req, res) {
        try {
            let data = await article.findOne({
                _id: req.body.article_id
            }, '_id nameArticle descriptionArticle dateArticle view')

            let createComment = await comment.create({
                userName: req.body.userName,
                comment: req.body.comment,
                article: data
            });

            let newComment = await comment.findOne({
                _id: createComment._id
            }, '_id userName comment article');

            return res.status(200).json({
                status: `Success create a comment!`,
                data: newComment
            });
        } catch (e) {
            return res.status(500).json({
                status: "Error!",
                errors: e
            });
        };
    };

    async update(req, res) {
        try {
            let updatedComment = await comment.findOneAndUpdate({
                _id: req.params.comment_id
            }, {
                userName: req.body.userName,
                comment: req.body.comment
            }, {
                new: true
            });
            
            let newComment = await comment.findOne({
                _id: updatedComment._id
            }, '_id userName comment article')
            return res.status(200).json({
                status: `Success update a comment!`,
                data: newComment
            });
        } catch (e) {
            return res.status(500).json({
                status: `Error!`,
                errors: e
            })
        };
    };


    async delete(req, res) {
    comment.delete({
            _id: req.params.comment_id
        }).then(() => {
            res.json({
                status: 'success delete comment',
                data: null
            })
        })
    };
};

module.exports = new CommentController;