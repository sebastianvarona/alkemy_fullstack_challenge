import { Router } from 'express';
import controller from '../controllers/dataController.js';
const router = Router();

router.get('/data', controller.getDatos);

router.get('/data/:id', controller.getDatosById);

router.post('/data', controller.postDatos);

router.put('/data/:id', controller.putDatosById);

router.delete('/data/:id', controller.deleteDatosById);

export default router;
