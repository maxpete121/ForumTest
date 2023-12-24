import { Schema } from "mongoose";



export const PostSchema = new Schema({
    name: {type: String, required: true, maxLength: 30},
    subText: {type: String, required: true, maxLength: 80},
    body: {type: String, required: true, maxLength: 200},
    profileId: {type: Schema.Types.ObjectId, ref: 'Account'},
    likeId: {type: Schema.Types.ObjectId, ref: 'Like'},
    commentId: {type: Schema.Types.ObjectId, ref: 'Comment'}
},{toJSON: {virtuals: true}})


PostSchema.virtual('account', {
    localField: 'profileId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

PostSchema.virtual('comment', {
    localField: 'commentId',
    foreignField: '_id',
    ref: 'Comment',
    justOne: true
})

PostSchema.virtual('like', {
    localField: 'commentId',
    foreignField: '_id',
    ref: 'Like',
    justOne: true
})