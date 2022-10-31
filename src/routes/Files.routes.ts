import { Router } from 'express'
const filesRoutes = Router();

import MulterMiddleware from '../app/middlewares/MulterMiddleware';
import {uploadFiles} from '../services/firebase';
import FilesController from '../app/controllers/FilesController'

filesRoutes.post('/files', 
  MulterMiddleware.single('file'),
  uploadFiles,
  FilesController.main
)


export default filesRoutes;