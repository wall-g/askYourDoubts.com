import mongoose from "mongoose";

const answerSchema = mongoose.Schema({
    answer: {
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

const answer = mongoose.model('answer', answerSchema);
export default answer;