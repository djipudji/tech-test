const {article} = require('../models/index'); // Import campaign and history
class articleController {
    // CHALLENGE 2
    async create(req, res){
        try {
            let createarticle = await article.create({
                nameArticle : req.body.nameArticle,
                descriptionArticle : req.body.descriptionArticle,
                datearticle : new Date
            })
            
            let newArticle = await article.findOne({
                _id: createarticle._id
            }, 'nameArticle descriptionArticle dateArticle view');

            return res.status(200).json({
                status: 'success create article',
                data: newArticle
            })
        } catch (e) {
            return res.status(500).json({
                status:'error'
            })
            
        }
    }

    async update(req, res){
        try {
            let updatearticle = await article.findOneAndUpdate({
                _id: req.params._id
            },{
                nameArticle : req.body.nameArticle,
                descriptionArticle : req.body.descriptionArticle
            },{
                new: true
            });
            
            let newarticle = await article.findOne({
                _id: updatearticle._id
            }, 'nameArticle descriptionArticle dateArticle view updated_at')

            return res.status(200).json({
                status: 'success update article',
                data: newarticle
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            });
            
        }
    }

    async getAll(req, res){
        try { 
            let newArticle = await article.find({},
            'nameArticle descriptionArticle dateArticle view').
            limit(6)
            return res.status(200).json({
                status: 'success get all article',
                data: newArticle
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            }) 
        }
    }

    async getOne(req, res){
        try {
            let newarticle = await article.findOne({
                _id : req.params._id
            },'nameArticle descriptionArticle dateArticle view')
        
            let sumView;
             if(newarticle.view==0){
                sumView = 1
            } else {
                sumView = newarticle.view +1
            }
            let updatearticle = await article.findOneAndUpdate({
                _id : req.params._id
            },{
                $set: {
                    view :sumView
                }    
            }, {
                new: true
            })
            return res.status(200).json({
                status: 'succes get one article',
                data : updatearticle
            })
        } catch (e) {
            return res.status(500).json({
                status: 'error',
                error: e
            })
        }
    }

    async delete(req, res){
       article.delete({
           _id: req.params._id
       }).then(() => {
           res.json({
               status: 'success delete article',
               data: null
           })
       })
};
 }

    

module.exports = new articleController
