import { Request, Response } from 'express';
import { omit } from 'lodash';

import { createTestUser } from '../services/testUser.service';
import log from '../logger';

export async function registerTestUser(req: Request, res: Response) {
  try {
    const user = await createTestUser(req.body);

    return res.send(omit(user.toJSON(), 'password'));
  } catch (err: any) {
    log.error(err);
    return res.status(409).send(err.message);
  }
}
