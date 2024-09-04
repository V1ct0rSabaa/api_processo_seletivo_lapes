import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './db/connection';
import expressRouter from './routes/router';
import dotenv from 'dotenv';

dotenv.config(); // instanciando as váriaveis de ambiente
const app = express();

//  middlewares
app.use(cors());
app.use(express.json());

// conectando no mongoDB
connectDB()

// Routes
const router = expressRouter
app.use('/api', router);

app.listen(3000, () => {
  console.log('Servidor Online!');
});
