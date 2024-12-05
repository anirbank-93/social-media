import express from 'express';

const router = express.Router();

// Middlewares
import { validateRequest } from '../middlewares';

// Schemas
import {
  createPostSchema,
  getPostSchema,
  updatePostSchema,
} from '../schemas/post.schema';

// Controllers
import { createPost, getPosts } from '../controllers/post.controller';

router.post('/', validateRequest(createPostSchema), createPost);
router.get('/', getPosts);
router.patch('/:id', validateRequest(updatePostSchema));

export default router;
