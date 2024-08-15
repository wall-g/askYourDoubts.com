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
    },
    createdDate: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    }
})

const question = mongoose.model('question', questionSchema);
export default question;