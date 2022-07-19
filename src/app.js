import express from 'express';
import cors from 'cors';
import router from './routes/router.js';
import { initializeDatabase } from './config/database.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeDatabase();

app.use('/', router);

export default app;
