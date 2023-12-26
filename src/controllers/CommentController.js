import { commentService } from "../services/CommentService.js";
import BaseController from "../utils/BaseController.js";





export class CommentController extends BaseController{
    constructor(){
        super('api/comments')
        this.router
        .get('', this.getComments)
        .post('', this.postComment)
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
}