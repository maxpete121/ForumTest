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

    async deletePost(postId){
        const foundPost = await dbContext.Posts.findById(postId)
        foundPost.remove()
        return `Post Removed`
    }
}


export const postService = new PostService()