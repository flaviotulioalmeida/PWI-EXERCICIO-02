import express from 'express';
import userRouter from './routes/userRoutes';
import technologyRouter from './routes/technologyRoutes';

const app = express();
const port = 3000;

app.use(express.json());

app.use(userRouter);
app.use(technologyRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
