import Answer from "../model/answer.js"

export const addAnswer = async (request, response) => {
    try {
        const newAnswer = new Answer(request.body);
        await newAnswer.save();
        return response.status(200).json({msg: "answer added successfully"});
    } catch (error) {
        return response.status(500).json({msg: "error while adding answer"});
    }
}

export const getAllAnswers = async (request, response) => {
    try {
        const answers = await Answer.find({postId: request.params.id});
        return response.status(200).json(answers);
    } catch (error) {
        return response.status(500).json({msg: "error while fetching answers"});
    }
}