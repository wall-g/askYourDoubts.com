import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: true
    }, 
    postId: {
        type: String,
        required: true,    
    },
    userName: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const comment = mongoose.model('comment', commentSchema);
export default comment;