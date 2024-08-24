import Comment from "../model/comment.js"

export const addComment = async (request, response) => {
    try {
        const newComment = new Comment(request.body);
        await newComment.save();
        return response.status(200).json({msg: "comment added successfully"});
    } catch (error) {
        return response.status(500).json({msg: "error while adding comment"});
    }
}

export const getAllComments = async (request, response) => {
    try {
        const comments = await Comment.find({postId: request.params.id});
        return response.status(200).json(comments);
    } catch (error) {
        return response.status(500).json({msg: "error while fetching comments"});
    }
}