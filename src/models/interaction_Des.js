var mongoose, {
    Schema
} = require('mongoose');
module.exports = mongoose.model('interaction_Des', schema({
    user_Id: Schema.Types.ObjectId,
    des_Id: {
        type: Number,
        required: true,
    },
    des_Comment: {
        type: String,
        required: true
    }
}));