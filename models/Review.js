const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
    {
    user: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
)


module.exports = mongoose.model('Review', reviewSchema)