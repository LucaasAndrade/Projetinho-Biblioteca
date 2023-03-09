
import 'dotenv/config';

import api from './routes/index.js';

import express from 'express';
const server = express();

server.use(api);

server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));