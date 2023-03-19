import express from 'express';

const router = express.Router();

// Middlewares
import { validateRequest } from '../middlewares';

// Schemas
import { createPostSchema } from '../schemas/post.schema';

// Controllers
import { createPost, getPosts } from '../controllers/post.controller';

router.post('/', validateRequest(createPostSchema), createPost);
router.get('/', getPosts);

export default router;
