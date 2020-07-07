import express from 'express';

import postRoutes from './routes/posts';

const app = express();
app.use(express.json());

app.use('/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
