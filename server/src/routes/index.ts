import express, { Request, Response } from 'express';

import testUserRoutes from './testUser.route';
import testPostRoutes from './testPost.route';
import postRoutes from './post.route';

const router = express.Router();

// router.get('/', (req: Request, res: Response) => {
//   res.send({
//     message: 'Express is working.',
//   });
// });

router.use('/api/test-users', testUserRoutes);
router.use('/api/test-posts', testPostRoutes);
router.use('/api/posts', postRoutes);

export default router;
