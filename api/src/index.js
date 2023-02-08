
import 'dotenv/config';


import AdmController from './controller/AdmController.js'
import EmprestimoConstroller from './controller/EmprestimoController.js'
import AutorController from './controller/AutorController.js'
import NascionalidadeController from './controller/NascionalidadeController.js'
import LivroController from './controller/LivroController.js'
import LeitorController from './controller/LeitorConstroller.js'
import CursoTurmaController from './controller/CursoTurmaController.js'
import GeneroController from './controller/GeneroController.js'
import DataController from './controller/DataController.js'

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
server.use(LeitorController);
server.use(CursoTurmaController);
server.use(GeneroController);
server.use(DataController);

server.listen(process.env.PORT, () => console.log(`API ONLINE NA PORTA ${process.env.PORT}`));