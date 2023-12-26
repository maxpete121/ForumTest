import { commentService } from "../services/CommentService.js";
import BaseController from "../utils/BaseController.js";





export class CommentController extends BaseController{
    constructor(){
        super('api/comments')
        this.router
        .get('', this.getComments)
    }

    async getComments(request, response, next){
        try {
            const allComment = await commentService.getComments()
        } catch (error) {
            
        }
    }
}