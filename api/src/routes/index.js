import AdmController from '../controller/AdmController.js'
import EmprestimoConstroller from '../controller/EmprestimoController.js'
import AutorController from '../controller/AutorController.js'
import NascionalidadeController from '../controller/NascionalidadeController.js'
import LivroController from '../controller/LivroController.js'
import LeitorController from '../controller/LeitorConstroller.js'
import CursoTurmaController from '../controller/CursoTurmaController.js'
import GeneroController from '../controller/GeneroController.js'
import DataController from '../controller/DataController.js'

import express from 'express';
import cors from 'cors';

const api = express();
api.use(cors());
api.use(express.json());

api.use(AdmController);
api.use(EmprestimoConstroller);
api.use(AutorController);
api.use(NascionalidadeController);
api.use(LivroController);
api.use(LeitorController);
api.use(CursoTurmaController);
api.use(GeneroController);
api.use(DataController);


export default api