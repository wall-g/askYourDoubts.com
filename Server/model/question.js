import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true,
    }, 
    tags: {
        type: [String],
        required: true
    }
})

const Question = mongoose.model('question', questionSchema);
export default Question;