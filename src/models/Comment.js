import { Schema } from "mongoose";







export const CommentSchema = new Schema({
    postedBy: {type: Schema.Types.ObjectId, ref: 'Account'},
    postId: {type: Schema.Types.ObjectId, ref: 'Post'},
    likes: {type: Schema.Types.ObjectId, ref: 'Like'},
    body: {type: String, required: true, maxLength: 150}
}, {toJSON: {virtuals: true}})

CommentSchema.virtual('account', {
    localField: 'profileId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})