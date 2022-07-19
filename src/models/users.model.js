var {
    model,
    Schema
} = require('mongoose');
module.exports = mongoose.model('Users', schema({
    user_Id: Schema.Types.ObjectId,
    user_Name: {
        type: String,
        required: true,
        validate: {
            validate: function (value) {
                return value.length > 0;
            },
            "message": "Empty Name is not allowed.",
        }
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}));