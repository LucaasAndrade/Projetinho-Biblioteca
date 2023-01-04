
import 'dotenv/config';
import AdmController from './controller/AdmController.js'
import EmprestimoConstroller from './controller/EmprestimoController.js'
import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
server.use(AdmController);
server.use(EmprestimoConstroller);





server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));