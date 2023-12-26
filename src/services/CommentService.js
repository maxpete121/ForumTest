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
}


export const commentService = new CommentService()