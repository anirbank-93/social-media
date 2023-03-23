import { ObtainDocumentType } from 'mongoose';

import userModel, { UserDocument } from '../models/testUser.model';

export async function createTestUser(input: ObtainDocumentType<UserDocument>) {
  try {
    return await userModel.create(input);
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function findTestUser() {}
