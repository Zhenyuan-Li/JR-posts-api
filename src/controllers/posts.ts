import { RequestHandler } from 'express';

import Post, { POSTS } from '../models/posts';

export const fetchPosts: RequestHandler = (req, res) => {
  res.status(200).send({ posts: POSTS });
};

export const fetchPostById: RequestHandler<{ id: string }> = (req, res) => {
  const { id } = req.params;
  const selectedPost = POSTS.find((post) => post.id === id);
  if (!selectedPost) {
    res.status(400).send({ error: 'Post not found!' });
  }
  res.status(200).send({ message: 'Post Fetched!', selectedPost });
};

export const createPost: RequestHandler = (req, res) => {
  const { author, content } = req.body as { author: string; content: string };
  const id = Math.random().toString();
  const newPost = new Post(id, author, content);

  POSTS.push(newPost);
  res.status(400).send({ message: 'Post Created!', newPost });
};

export const updatePost: RequestHandler<{ id: string }> = (req, res) => {
  const { id } = req.params;
  const { author, content } = req.body as { author: string; content: string };
  const postIndex = POSTS.findIndex((post) => post.id === id);
  if (postIndex < 0) {
    res.status(400).send({ error: 'Post Not Found!' });
  }

  POSTS[postIndex] = new Post(POSTS[postIndex].id, author, content);
  res.status(400).send({ message: 'Post Updated!', post: POSTS[postIndex] });
};

export const deletePost: RequestHandler<{ id: string }> = (req, res) => {
  console.log(req, res);
  const { id } = req.params;
  const postIndex = POSTS.findIndex((post) => post.id === id);
  if (postIndex < 0) {
    res.status(400).send({ error: 'Post Not Found!' });
  }

  POSTS.splice(postIndex, 1);
  res.status(400).send({ message: 'Post Deleted!' });
};
