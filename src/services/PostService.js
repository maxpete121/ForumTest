import { dbContext } from "../db/DbContext.js"






class PostService{

    async getPost(){
        const allPosts = await dbContext.Posts.find()
        return allPosts
    }

    async newPost(newPost){
        const post = await dbContext.Posts.create(newPost)
        return post
    }
}


export const postService = new PostService()