const {
    check,
    validationResult,
    matchedData,
    sanitize
  } = require('express-validator') //form validation & sanitize form params
const {article, comment} = require('../models/index')
const {
    ObjectId
  } = require('mongodb')
module.exports = {
    getOne: [
        check('comment_id', 'must be fill').custom(async (value, {req}) => {
            try {
              if((value.length != 24) ) {
                throw new Error(`ID must 24 character!`)
              };
              let findComment = await comment.findOne({
                _id: value
              });
      
              if(!findComment) {
                throw new Error(`ID not found`)
              }
            } catch(e) {
              throw new Error(e)
            }
          }),
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.mapped()
                });
            };
            next()
        }
    ],

    
    getByArticle : [
        check('article_id').custom(async (value, {req}) => {
            const checkArticle = await article.findOne({
                _id: value
              })
              if (!checkArticle) throw new Error('Article not found!')
            }).notEmpty(),
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.mapped()
                });
            };
            next()
        }
    ],

    create : [
        check(`comment`,'must be fill must be fill, min 1 and max 300 character').isString().notEmpty().isLength({
            min: 1,
            max: 300
          }),
        check(`article_id`).custom(async (value, {req}) => {
                const checkArticle = await article.findOne({
                    _id: value
                  })
                  if (!checkArticle) throw new Error('Article not found!')
                }).notEmpty(),
        check('userName', 'must be fill must be fill, min 1 and max 5 character').isString().notEmpty().isLength({
            min: 1,
            max: 5
          }),
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.mapped()
                });
            };
            next()
        }
    ],

    update: [
        check(`comment`,'must be fill must be fill, min 5 and max 35 character').isString().notEmpty().isLength({
            min: 5,
            max: 35
          }),
          check('userName', 'must be fill must be fill, min 1 and max 5 character').isString().notEmpty().isLength({
            min: 1,
            max: 5
          }),
    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.mapped()
            });
        };
        next()
        }
    ],

    delete: [
        check('comment_id', 'must be fill').custom(async (value, {req}) => {
            try {
              if((value.length != 24) ) {
                throw new Error(`ID must 24 character!`)
              };
              let findComment = await comment.findOne({
                _id: value
              });
      
              if(!findComment) {
                throw new Error(`ID not found`)
              }
            } catch(e) {
              throw new Error(e)
            }
          }),
        (req, res, next) => {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(422).json({
                    errors: errors.mapped()
                });
            };
            next()
        }
    ]
}