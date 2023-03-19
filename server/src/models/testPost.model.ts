import mongoose from 'mongoose';

import { UserDocument } from './testUser.model';

export interface PostDocument extends mongoose.Document {
  user: UserDocument['_id'];
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const POST_SCHEMA = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'test_user' },
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const postModel = mongoose.model<PostDocument>('test_post', POST_SCHEMA);

export default postModel;
