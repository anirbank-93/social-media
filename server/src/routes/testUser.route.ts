import express, { Request, Response } from 'express';

// Middlewares
import { validateRequest } from '../middlewares';

// Schemas
import { createTestUserSchema } from '../schemas/testUser.schema';

// Controllers
import { registerTestUser } from '../controllers/testUser.controller';

const router = express.Router();

// router.get('/', (req: Request, res: Response) => {
//   res.send({
//     message: 'Express is working.',
//   });
// });

// Register user
router.post('/', validateRequest(createTestUserSchema), registerTestUser);

export default router;
