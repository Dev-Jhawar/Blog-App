const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true },
    content: { 
        type: String, 
        required: true },
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' }, 
    likes: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' }],
}, { 
    timestamps: true 
});

module.exports = mongoose.models.Post || mongoose.model('Post', PostSchema);