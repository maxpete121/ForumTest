import { Schema } from "mongoose";







export const CommentSchema = new Schema({
    postedBy: {type: Schema.Types.ObjectId, ref: 'Account'},
    body: {type: String, required: true, maxLength: 150},
    postId: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    user: {type: String, required: true}
}, {toJSON: {virtuals: true}})

CommentSchema.virtual('account', {
    localField: 'postedBy',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

CommentSchema.virtual('post', {
    localField: 'postId',
    foreignField: '_id',
    ref: 'Post',
    justOne: true
})