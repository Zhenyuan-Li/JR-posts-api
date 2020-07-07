import express from 'express';
import * as dotenv from 'dotenv';
import postRoutes from './routes/posts';

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
