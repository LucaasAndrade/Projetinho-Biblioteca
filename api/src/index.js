
import 'dotenv/config';


import AdmController from './controller/AdmController.js'
import EmprestimoConstroller from './controller/EmprestimoController.js'
import AutorController from './controller/AutorController.js'
import NascionalidadeController from './controller/NascionalidadeController.js'
import LivroController from './controller/LivroController.js'


import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
server.use(AdmController);
server.use(EmprestimoConstroller);
server.use(AutorController);
server.use(NascionalidadeController);
server.use(LivroController);


server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));