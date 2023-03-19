import { object, string } from 'yup';

const payload = {
  body: object({
    title: string().required('Title is required'),
    description: string().required('Description is required'),
    // .min(120, 'Description is too short - should be 120 char minimum'),
  }),
};

export const createPostSchema = object({ ...payload });
