import express, {Request, Response} from 'express';
import logger from 'morgan'; 
import mongoose from 'mongoose';
import imageRouter from './route/index';
import dotenv from 'dotenv';
dotenv.config();


// Connect to MongoDB
    mongoose.connect(process.env.MONGO_URI as string, {
      })
      .then(() => {
        console.log("🚀 Connected to MongoDB");
      })
      .catch((error) => {
        console.log(error);
      });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', imageRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});