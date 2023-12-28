import { dbContext } from "../db/DbContext.js"






class CommentService{
    async getComments(){
        const comments = await dbContext.Comments.find().populate('account')
        return comments
    }

    async postComment(newComment){
        const createComment = await dbContext.Comments.create(newComment)
        return createComment
    }

    async deleteComment(commentId){
        const comment = await dbContext.Comments.findById(commentId)
        comment.remove()
        return `removed`
    }
}


export const commentService = new CommentService()