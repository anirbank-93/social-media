import mongoose from 'mongoose';

import { UserDocument } from './testUser.model';

export interface PostDocument extends mongoose.Document {
  // user: UserDocument['_id'];
  creator: string;
  title: string;
  description: string;
  tags: [];
  file: string;
  likes: number;
}

const POST_SCHEMA = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'test_user' },
    creator: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    tags: [String],
    file: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const postModel = mongoose.model<PostDocument>('post', POST_SCHEMA);

export default postModel;
