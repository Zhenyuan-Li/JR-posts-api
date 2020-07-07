import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import postRoutes from './routes/posts';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
