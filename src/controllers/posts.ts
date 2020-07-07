import { RequestHandler } from 'express';

export const helloWorld: RequestHandler = (req, res) => {
  res.status(200).send('Hello World');
};

export const oneFunction = (): void => {
  console.log('Hello World');
};
