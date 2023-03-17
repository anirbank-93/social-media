import express, { Request, Response } from 'express';

import testUserRoutes from './testUser.route';
import testPostRoutes from './testPost.route';

const router = express.Router();

// router.get('/', (req: Request, res: Response) => {
//   res.send({
//     message: 'Express is working.',
//   });
// });

router.use('/test-users', testUserRoutes);
router.use('/test-posts', testPostRoutes);

export default router;
