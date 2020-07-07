import Router from 'express';

import { helloWorld } from '../controllers/posts';

const router = Router();

router.get('/', helloWorld);

export default router;
