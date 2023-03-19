import { object, string } from 'yup';

const payload = {
  body: object({
    title: string().required('Title is required'),
    description: string().required('Description is required.'),
    // .min(120, 'Description is too short - should be 120 char minimum'),
  }),
};

const params = {
  params: object({
    postId: string().required('postId is required'),
  }),
};

export const createTestPostSchema = object({ ...payload });

export const getTestPostSchema = object({ ...params });

export const updateTestPostSchema = object({ ...params, ...payload });

export const deleteTestPostSchema = object({ ...params });
