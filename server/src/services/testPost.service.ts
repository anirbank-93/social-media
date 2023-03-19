import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';

import postModel, { PostDocument } from '../models/testPost.model';

export const saveToDb = async (input: any) => {
  return await postModel.create(input);
};

export const findFromDbById = async (query: FilterQuery<PostDocument>) => {
  return await postModel.findOne(query);
};

export const findAndUpdate = async (
  query: FilterQuery<PostDocument>,
  update: UpdateQuery<PostDocument>,
  options: QueryOptions
) => {
  return await postModel.findOneAndUpdate(query, update, options);
};

export const deleteFromDb = async (query: FilterQuery<PostDocument>) => {
  return await postModel.findOneAndDelete(query);
};
