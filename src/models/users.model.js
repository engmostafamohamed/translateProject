var mongoose, {
    Schema
} = require('mongoose');
module.exports = mongoose.model('Users', schema({
    user_id: Schema.Types.ObjectId,
    term_id: Schema.Types.ObjectId,
    language: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    subcategory: {
        type: String,
        required: true
    },
    term_Name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    abbreviation: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    }
}));