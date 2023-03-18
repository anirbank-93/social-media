import userModel from '../models/testUser.model';

export async function createTestUser(input: any) {
  try {
    return await userModel.create(input);
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export async function findTestUser() {}
