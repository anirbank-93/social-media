import postModel from '../models/post.model';

export const saveToDb = async (input: any) => {
  return await postModel.create(input);
};

export const findPosts = async () => {
  return await postModel.find();
};
