import { Schema } from "mongoose";





export const likeSchema = new Schema({
    profileId: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
    postId: {type: Schema.Types.ObjectId, ref: 'Post'},
    liked: {type: Boolean, required: true}
},{toJSON: {virtuals: true}})

likeSchema.virtual('account', {
    localField: 'profileId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})

likeSchema.virtual('post', {
    localField: 'postId',
    foreignField: '_id',
    ref: 'Post',
    justOne: true
})