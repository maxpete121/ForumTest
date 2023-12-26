import { postService } from "../services/PostService.js";
import BaseController from "../utils/BaseController.js";






export class PostController extends BaseController{
    constructor(){
        super('api/posts')
        this.router
        .get('', this.getPost)
        .post('', this.newPost)
        .delete('/:postId', this.deletePost)
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

    async deletePost(request, response, next){
        try {
            const postId = request.params.postId 
            const deletedPost = await postService.deletePost(postId)
            response.send(deletedPost)
        } catch (error) {
            next(error)
        }
    }
}