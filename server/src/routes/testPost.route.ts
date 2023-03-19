import express, { Request, Response } from 'express';

// Middlewares
import { validateRequest } from '../middlewares';

// Schemas
import {
  createTestPostSchema,
  getTestPostSchema,
  updateTestPostSchema,
  deleteTestPostSchema,
} from '../schemas/testPost.schema';

// Handlers
import {
  createPostHandler,
  getPostByIdHandler,
  updatePostHandler,
  deletePostHandler,
} from '../controllers/testPost.controller';

const router = express.Router();

router.post('/', validateRequest(createTestPostSchema), createPostHandler);

router.get('/:postId', validateRequest(getTestPostSchema), getPostByIdHandler);

router.put(
  '/:postId',
  validateRequest(updateTestPostSchema),
  updatePostHandler
);

router.delete(
  '/:postId',
  validateRequest(deleteTestPostSchema),
  deletePostHandler
);

export default router;
