import Question from "../model/question.js";

export const askQuestion = async (request, response) => {
    try {
        const newQuestion = new Question(request.body);
        await newQuestion.save();
        return response.status(200).json({ msg: "question added successfully" });
    } catch (error) {
        return response.status(500).json({ msg: "error while adding question" });
    }
}

export const getAllQuestions = async (request, response) => {
    try {
        let questions = await Question.find({});
        return response.status(200).json(questions);
    } catch (error) {
        return response.status(500).json({ msg: 'error while fetching questions' })
    }
}

export const getQuestionById = async (request, response) => {
    try {
        const post = await Question.findById(request.params.id);
        return response.status(200).json(post);
    } catch (error) {
        return response.status(500).json({ msg: error.message })
    }
}
