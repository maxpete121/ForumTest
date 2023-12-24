import { postService } from "../services/PostService.js";
import BaseController from "../utils/BaseController.js";






export class PostController extends BaseController{
    constructor(){
        super('api/posts')
        this.router
    }


    async getPost(request, response, next){
        try {
            const posts = await postService.getPost()
            response.send(posts)
        } catch (error) {
            next(error)
        }
    }

    async newPost(request, response, next){
        try {
            const newPost = request.body
            const posted = await postService.newPost(newPost)
            response.send(posted)
        } catch (error) {
            next(error)
        }
    }
}