import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/paystonedb');

const db = mongoose.connection;

db.on('error', (error) => console.log(error));
db.on('open', () => console.log('Connected to the Database'));

app.listen(3000, () => console.log('Server connected'));
