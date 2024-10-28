import AdmController from '../controller/AdmController.js'
import EmprestimoConstroller from '../controller/EmprestimoController.js'
import AutorController from '../controller/AutorController.js'
import NascionalidadeController from '../controller/NascionalidadeController.js'
import LivroController from '../controller/LivroController.js'
import LeitorController from '../controller/LeitorConstroller.js'
import CursoController from '../controller/CursoController.js'
import GeneroController from '../controller/GeneroController.js'
import DataController from '../controller/DataController.js'
import TurmaController from '../controller/TurmaController.js'
import PrateleiraController from '../controller/PrateleiraController.js'
import SituacaoController from '../controller/SituacaoController.js'
import CorController from '../controller/CorController.js'

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
api.use(CursoController);
api.use(GeneroController);
api.use(DataController);
api.use(TurmaController);
api.use(PrateleiraController);
api.use(SituacaoController);
api.use(CorController);

export default api