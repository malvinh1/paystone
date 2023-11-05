import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.on('open', () => console.log('Connected to the Database'));

app.listen(3000, () => console.log('Server connected'));
