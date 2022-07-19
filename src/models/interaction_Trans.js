var mongoose, {
    Schema
} = require('mongoose');
module.exports = mongoose.model('interaction_Trans', schema({
    user_Id: Schema.Types.ObjectId,
    trans_Id: {
        type: Number,
        required: true,
    },
    trans_Comment: {
        type: String,
        required: true
    }
}));