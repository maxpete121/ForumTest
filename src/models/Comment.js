import { Schema } from "mongoose";







export const CommentSchema = new Schema({
    postedBy: {type: Schema.Types.ObjectId, ref: 'Account'},
    body: {type: String, required: true, maxLength: 150}
}, {toJSON: {virtuals: true}})

CommentSchema.virtual('account', {
    localField: 'postedBy',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
})