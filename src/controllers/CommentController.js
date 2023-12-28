import { commentService } from "../services/CommentService.js";
import BaseController from "../utils/BaseController.js";
import { Auth0Provider } from "@bcwdev/auth0provider";




export class CommentController extends BaseController{
    constructor(){
        super('api/comments')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .get('', this.getComments)
        .post('', this.postComment)
        .delete('/:commentId', this.deleteComment)
    }

    async getComments(request, response, next){
        try {
            const allComment = await commentService.getComments()
            response.send(allComment)
        } catch (error) {
            next(error)
        }
    }

    async postComment(request, response, next){
        try {
            const newComment = request.body
            const created = await commentService.postComment(newComment)
            response.send(created)
        } catch (error) {
            next(error)
        }
    }

    async deleteComment(request, response, next){
        try {
            const commentId = request.params.commentId
            const deletedComment = await commentService.deleteComment(commentId)
            response.send(deletedComment)
        } catch (error) {
            next(error)
        }
    }
}