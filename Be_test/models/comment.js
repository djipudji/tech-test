const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete')


const commentSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: false,
        default: null
    },
    comment:{
        type: String,
        required: false,
        default: null
    },
    article: {
        type: mongoose.Schema.Types.Mixed,
        required: true
      }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    versionKey: false ,
    toJSON:{ getters:true }
});

commentSchema.plugin(mongoose_delete, {
    overrideMethods: 'all'
});

module.exports = comment = mongoose.model('comment', commentSchema, 'comment')
