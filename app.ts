import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './db/connection';
import expressRouter from './routes/router';
import dotenv from 'dotenv';

dotenv.config(); // // Carrega as variáveis de ambiente do arquivo .env
const app = express();

//  middlewares
app.use(cors()); // Habilita o  CORS para permitir requests de diferentes origens
app.use(express.json()); // permite request com JSON

connectDB() // conectando no mongoDB

// Routes
const router = expressRouter
app.use('/api', router);

app.listen(3000, () => {
  console.log('Servidor Online!'); // teste manual é feio, eu sei kkkk
});
