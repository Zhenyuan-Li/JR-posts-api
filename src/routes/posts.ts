import Router from 'express';

import {
  fetchPosts,
  fetchPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/posts';

const router = Router();

router.get('/', fetchPosts);
router.get('/:id', fetchPostById);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
