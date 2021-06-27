const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')


const articleSchema = new mongoose.Schema({
    nameArticle: {
        type: String,
        required: false,
        default: null
    },
    descriptionArticle:{
        type: String,
        required: false,
        default: null
    },
    dateArticle:{
        type: Date,
        required: false,
        default: null
    },
    view:{
        type: Number,
        required: false,
        default: 0
    },
    
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    versionKey: false ,
    toJSON:{ getters:true }
})


articleSchema.plugin(mongoose_delete, {overrideMethods: 'all' }) 

module.exports = article = mongoose.model('article', articleSchema, 'article');